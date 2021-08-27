import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {BackSvg, FacebookSvg} from '@assets/svg';
import gStyles from '@/theme';
import globalStyles from '@styles/globalStyles';
import {Formik} from 'formik';
import {loginValidationSchema} from '@utils/validation';
import Divider from '@components/Divider';
import {authStore} from '@store/authStore';
import shallow from 'zustand/shallow';

const Login = ({navigation}) => {
  const [login, loading, facebookLogin] = authStore(
    state => [state.login, state.loading, state.facebookLogin],
    shallow,
  );

  const [errorMsg, setErrorMsg] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifySpaceBetween,
            globalStyles.flexRowAlignCenter,
          ]}>
          <Text style={styles.title}>Login</Text>
          <Text style={globalStyles.errorText}>{errorMsg || errorMsg}</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={async (values, {setSubmitting}) => {
            setSubmitting(true);
            setErrorMsg('');
            await login(values)
              .then(() => {
                setSubmitting(false);
              })
              .catch(error => {
                setErrorMsg(error ? error : null);
                setSubmitting(false);
              });
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View>
              <View style={styles.inputField}>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.inputField}>
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit}
                disabled={isSubmitting}>
                <Text style={styles.loginBtnText}>
                  {loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                  ) : (
                    'Sign In'
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <Divider text="or" />

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => facebookLogin()}>
          <FacebookSvg />
        </TouchableOpacity>

        <View style={styles.hrefLayout}>
          <Text style={styles.hrefTextLight}>Are you a new member?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.hrefTextBold}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 12,
    paddingTop: 5,
  },
  body: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  inputField: {
    marginVertical: 12,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingLeft: 12,
  },
  hrefLayout: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hrefTextLight: {
    fontFamily: 'Nunito-Light',
    marginRight: 12,
  },
  hrefTextBold: {
    fontFamily: 'Nunito-Bold',
  },
  loginBtn: {
    borderRadius: 15,
    marginVertical: 6,
    height: 50,
    justifyContent: 'center',
    backgroundColor: gStyles.primaryColor,
  },
  loginBtnText: {
    fontFamily: 'Nunito-Bold',
    alignSelf: 'center',
    color: '#fff',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginTop: 6,
  },
  disableBtn: {
    borderRadius: 15,
    marginVertical: 6,
    padding: 15,
    backgroundColor: '#ddd',
  },
});
export default Login;
