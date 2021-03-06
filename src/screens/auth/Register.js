import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {BackSvg} from '@assets/svg';
import gStyles from '@/theme';
import globalStyles from '@styles/globalStyles';
import {Formik} from 'formik';
import {signUpValidationSchema} from '@utils/validation';
import {authStore} from '@store/authStore';
import shallow from 'zustand/shallow';

const Register = ({navigation}) => {
  const [signUp, loading] = authStore(
    state => [state.signUp, state.loading],
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
          <Text style={styles.title}>Sign Up</Text>
          <Text style={globalStyles.errorText}>{errorMsg || errorMsg}</Text>
        </View>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={async (values, {setSubmitting}) => {
            setSubmitting(true);
            const payload = {
              fullName: values.fullName,
              email: values.email,
              password: values.password,
            };

            setErrorMsg('');
            await signUp(payload)
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
                  name="fullName"
                  placeholder="Your name"
                  style={styles.input}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>
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
              <View style={styles.inputField}>
                <TextInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  style={styles.input}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={styles.hrefLayout}>
                <Text style={styles.hrefTextLight}>
                  Are you a already member?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.hrefTextBold}>Login Here</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit}
                disabled={isSubmitting}>
                <Text style={styles.loginBtnText}>
                  {loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                  ) : (
                    'Sign Up'
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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
    justifyContent: 'space-between',
  },
  hrefTextLight: {
    fontFamily: 'Nunito-Light',
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
export default Register;
