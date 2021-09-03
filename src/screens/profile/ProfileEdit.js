import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import globalStyles from '@styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {userStore} from '@store/userStore';
import shallow from 'zustand/shallow';
import {Formik} from 'formik';
import gStyles from '@/theme';

const ProfileEdit = ({navigation}) => {
  const [fetchProfile, me, loading, updateProfile] = userStore(
    state => [state.fetchProfile, state.me, state.loading, state.updateProfile],
    shallow,
  );
  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    setFormLoading(true);
    if (formRef.current) {
      setFormLoading(false);
      formRef.current.handleSubmit();
    }
  };
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={[
          styles.header,
          globalStyles.justifySpaceBetween,
          globalStyles.flexRowAlignCenter,
          globalStyles.flexRow,
        ]}>
        <View style={[globalStyles.flexRowAlignCenter, globalStyles.flexRow]}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Icon name="md-chevron-back" color="#333" size={20} />
          </TouchableOpacity>
          <Text
            style={[
              globalStyles.themeTextBold,
              globalStyles.lgText,
              globalStyles.ml8,
            ]}>
            Profile Edit
          </Text>
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => handleSubmit()}>
          {formLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.btnText}>POST</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <ScrollView>
            <Formik
              innerRef={formRef}
              enableReinitialize
              initialValues={{
                fullName: me.fullName,
                email: me.email,
                bio: me.bio,
              }}
              onSubmit={async (values, {setSubmitting}) => {
                console.log(values);
                try {
                  await updateProfile(values);
                } catch (error) {}
              }}>
              {({handleChange, handleBlur, values, errors, touched}) => (
                <View>
                  <View style={styles.inputField}>
                    <TextInput
                      name="fullName"
                      placeholder="fullName"
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
                      editable={false}
                      selectTextOnFocus={false}
                      name="email"
                      placeholder="Email"
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />

                    <Text style={globalStyles.infoText}>
                      You cannot update your email.
                    </Text>
                  </View>
                  <View style={styles.inputField}>
                    <TextInput
                      name="bio"
                      multiline
                      numberOfLines={1}
                      placeholder="About yourself"
                      style={styles.input}
                      onChangeText={handleChange('bio')}
                      onBlur={handleBlur('bio')}
                      value={values.bio}
                    />
                    {errors.bio && touched.bio && (
                      <Text style={styles.errorText}>{errors.bio}</Text>
                    )}
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    paddingTop: 12,
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
  disableBtn: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 35,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    backgroundColor: gStyles.primaryColor,
    borderRadius: 10,
    height: 35,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
  },
});
export default ProfileEdit;
