import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import gStyles from '@/theme';
import globalStyles from '@styles/globalStyles';
import {Formik} from 'formik';
import {loginValidationSchema} from '@utils/validation';
import {authStore} from '@store/authStore';
import Container from '@components/Container';
import shallow from 'zustand/shallow';
import SocialLogin from '@components/auth/SocialLogin';

const Login = ({navigation}) => {
  const [login, loading, facebookLogin] = authStore(
    state => [state.login, state.loading, state.facebookLogin],
    shallow,
  );

  const [errorMsg, setErrorMsg] = useState('');

  const loginWithFacebook = async () => {
    setErrorMsg('');
    try {
      await facebookLogin();
    } catch (e) {
      setErrorMsg(e);
      console.log(e);
    }
  };

  return (
    <Container footer={<SocialLogin />}>
      <View style={styles.body}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>
          We are happy that you are back again.
        </Text>

        <Text style={globalStyles.errorText}>{errorMsg || errorMsg}</Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={async (values, {setSubmitting}) => {
            setSubmitting(true);
            setErrorMsg('');
            try {
              await login(values);
              setSubmitting(false);
            } catch (e) {
              setErrorMsg(e);
              setSubmitting(false);
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
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 14,
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  inputField: {
    marginVertical: 12,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    fontFamily: 'Nunito-Regular',
    paddingLeft: 12,
  },

  loginBtn: {
    width: '90%',
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
  footer: {
    flex: 1,
  },
});
export default Login;
