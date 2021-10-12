import React, {useRef, useState, useContext} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {userStore} from '@store/userStore';
import {Formik} from 'formik';
import {useQuery} from 'react-query';
import {fetchProfile} from '@libs/query';
import {
  Text,
  Box,
  Icon,
  HStack,
  Input,
  FormControl,
  TextArea,
  VStack,
  Button,
} from 'native-base';
import {ThemeContext} from '@/libs/ThemeProvider';

const ProfileEdit = ({navigation}) => {
  const updateProfile = userStore(state => state.updateProfile);
  const {dark, theme} = useContext(ThemeContext);

  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    setFormLoading(true);
    if (formRef.current) {
      setFormLoading(false);
      formRef.current.handleSubmit();
    }
  };

  return (
    <Box flex={1} bg={theme.backgroundColor}>
      <StatusBar
        animated
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <Box
        bg={theme.backgroundColor}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px={2}>
        <HStack alignItems="center">
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Ionicons name="md-chevron-back" color={theme.color} size={20} />
          </TouchableOpacity>

          <Text
            color={theme.color}
            fontSize="lg"
            pl={2}
            fontFamily="Nunito-SemiBold">
            Profile Edit
          </Text>
        </HStack>

        <Button size="sm" variant="subtle" onPress={() => handleSubmit()}>
          {formLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text>POST</Text>
          )}
        </Button>
      </Box>
      <Box px={2} mt={6}>
        {profileLoading ? (
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
                <VStack>
                  <Input
                    variant="underlined"
                    placeholder="Full Name"
                    mb={4}
                    color={theme.color}
                    value={values.fullName}
                    InputLeftElement={
                      <Icon
                        as={<Ionicons name="md-person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                  />

                  <FormControl my={4}>
                    <Input
                      variant="underlined"
                      placeholder="email"
                      value={values.email}
                      isDisabled
                      InputLeftElement={
                        <Icon
                          as={<Ionicons name="md-mail" />}
                          size={5}
                          ml="2"
                          color="muted.400"
                        />
                      }
                    />
                    <FormControl.HelperText>
                      You cannot update your mail.
                    </FormControl.HelperText>
                  </FormControl>

                  <TextArea
                    h={20}
                    color={theme.color}
                    borderWidth={0}
                    placeholder="Text Area Placeholder"
                    aria-label="t1"
                    numberOfLines={4}
                    value={values.bio}
                  />
                </VStack>
              )}
            </Formik>
          </ScrollView>
        )}
      </Box>
    </Box>
  );
};

export default ProfileEdit;
