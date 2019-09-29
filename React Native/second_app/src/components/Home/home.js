import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

import {Actions} from 'react-native-router-flux'

class Home extends React.Component {
    render(){
        return (
            <View>
                <Text>This is home page</Text>
                <Button
                    title="Go About Page"
                    onPress={()=> {Actions.about()}}
                />
            </View>
        )
    }
}
export default Home;
    