import React from 'react';
import {View, Text, Image} from 'react-native';

import {feedsScreenStyles} from './feedsScreenStyles';


export const FeedsScreen = () => {

    return(
        <View style={feedsScreenStyles.feedsScreen}>
        <View style={feedsScreenStyles.postContainer}>
            <Image style={feedsScreenStyles.feedsImage}/>
                <View style={feedsScreenStyles.feedsScreenContainer}>
                    <Text style={feedsScreenStyles.feedsText}></Text>
                </View>
            </View>
        </View>
    )
};