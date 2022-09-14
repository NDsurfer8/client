import { View, Text, StyleSheet, ScrollView, TextInput, Button, KeyboardAvoidingView,Alert, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import * as houseAction from '../redux/actions/houseAction'


const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(),
  image: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().required(),
  homeType: yup.string().required(),
  yearBuilt: yup.number().required(),
})

const AddHomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading){
    return(
      <View>
        <ActivityIndicator
        style={styles.center}
          size= 'large'
        />
      </View>
    )
  }

  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            title: '',
            image: '',
            homeType: '',
            price: '',
            yearBuilt: '',
            address: '',
            description: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            setIsLoading(true);
            dispatch(houseAction.createHome(values))
              .then(()=>{
                setIsLoading(false)
                Alert.alert('created successfully')
              })
              .catch(()=>{
                setIsLoading(false)
                Alert.alert('an error occured', [{text: 'ok'}])
              })
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                  onBlur={props.handleBlur('title')}
                />
                <Text>{props.touched.title && props.errors.title}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                onBlur={props.handleBlur('image')}
                  style={styles.input}
                  onChangeText={props.handleChange('image')}
                  value={props.values.image}
                />
                <Text>{props.touched.image && props.errors.image}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Home Type</Text>
                <TextInput
                onBlur={props.handleBlur('homeType')}
                  style={styles.input}
                  onChangeText={props.handleChange('homeType')}
                  value={props.values.homeType}
                />
                <Text>{props.touched.homeType && props.errors.homeType}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                onBlur={props.handleBlur('price')}
                  keyboardType='numberic'
                  style={styles.input}
                  onChangeText={props.handleChange('price')}
                  value={props.values.price}
                />
                <Text>{props.touched.price && props.errors.price}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Year Built</Text>
                <TextInput
                onBlur={props.handleBlur('yearBuilt')}
                  keyboardType='numberic'
                  style={styles.input}
                  onChangeText={props.handleChange('yearBuilt')}
                  value={props.values.yearBuilt}
                />
                <Text>{props.touched.yearBuilt && props.errors.yearBuilt}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                onBlur={props.handleBlur('address')}
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange('address')}
                  value={props.values.address}
                />
                <Text>{props.touched.address && props.errors.address}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                onBlur={props.handleBlur('description')}
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange('description')}
                  value={props.values.description}
                />
                <Text>{props.touched.description && props.errors.description}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Add Home'
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>



      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddHomeScreen
const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10
  },
  formGroup: {
    width: '100%',

  },
  label: {
    marginVertical: 10
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  buttonContainer: {
    marginTop: 20
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})