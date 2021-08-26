import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BackSvg} from '@assets/svg';
import gStyles from '@/theme';
import {Formik} from 'formik';
import {loginValidationSchema} from '@utils/validation';
import {authStore} from '@store/authStore';

const Login = ({navigation}) => {
  const login = authStore(state => state.login);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Login</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(true);
            try {
              login(values);
              setSubmitting(false);
            } catch (e) {
              setSubmitting(false);

              console.log('Login error', e);
            }
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
              <View style={styles.hrefLayout}>
                <Text style={styles.hrefTextLight}>Are you a new member?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.hrefTextBold}>Register Here</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit}
                disabled={isSubmitting}>
                <Text style={styles.loginBtnText}>Sign In</Text>
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
    padding: 15,
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
