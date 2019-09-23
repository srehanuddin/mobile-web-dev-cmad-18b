/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      value : "",
      allData :[]
    }
  }
  onValue(e){
    this.setState({
      value : e
    })
  }

  onSubmit(){
    let arr= this.state.allData;
    arr.push(this.state.value);
    this.setState({
      allData : arr
    })
  }

  render(){
    return (
      // <Fragment>
      //   <StatusBar barStyle="dark-content" />
      //   <SafeAreaView>
      //     <ScrollView
      //       contentInsetAdjustmentBehavior="automatic"
      //       style={styles.scrollView}>
      //       <Header />
      //       {global.HermesInternal == null ? null : (
      //         <View style={styles.engine}>
      //           <Text style={styles.footer}>Engine: Hermes</Text>
      //         </View>
      //       )}
      //       <View style={styles.body}>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Step One</Text>
      //           <Text style={styles.sectionDescription}>
      //             Edit <Text style={styles.highlight}>App.js</Text> to change this
      //             screen and hello world.
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>See Your Changes</Text>
      //           <Text style={styles.sectionDescription}>
      //             <ReloadInstructions />
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Debug</Text>
      //           <Text style={styles.sectionDescription}>
      //             <DebugInstructions />
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Learn More</Text>
      //           <Text style={styles.sectionDescription}>
      //             Read the docs to discover what to do next:
      //           </Text>
      //         </View>
      //         <LearnMoreLinks />
      //       </View>
      //     </ScrollView>
      //   </SafeAreaView>
      // </Fragment>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Todo App
        </Text>
        <TextInput
          placeholder="Enter here.."
          onChangeText={(e)=> this.onValue(e)}
        />

        <Button
          onPress={() => this.onSubmit()}
          title="Press Me"
        />
        {this.state.allData.map((item)=>{
          return(
            <Text>{item}</Text>
          )
        })}
      </View>
      );
    }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
