import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

import {Actions} from 'react-native-router-flux'


class About extends React.Component {
    render(){
        return (
            <View>
                <Text>This is about page</Text>
                <Button
                    title="Go Home Page"
                    onPress={()=> {Actions.pop()}}
                />
            </View>
        )
    }
}
export default About;
    