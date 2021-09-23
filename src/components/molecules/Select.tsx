import React, { FC } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/styles/generals';

type tplotOptions = {
    [key: string]: string;
}

type Props = {
    selected: {
        setSelectedValue: Function;
        selectedValue: string;
    }
    listValues: tplotOptions[],
    keys: {
        value: string;
        label: string;
    }
}

const Select: FC<Props> = ({ selected, listValues, keys }) => {

    const { value, label } = keys;
    const { setSelectedValue, selectedValue } = selected;
    
    return (

        <View style={styles.containerSelect}>
            <Text style={colors.white}>Select Difficulty:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: "20%", backgroundColor: '#fff', color: '#fff' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {
                    listValues.map((level, index) => <Picker.Item
                        key={index}
                        label={level[label]}
                        value={level[value]}
                    />)
                }

            </Picker>
        </View>
    );
};


const styles = StyleSheet.create({
    containerSelect: {
        paddingTop: 40,
        alignItems: "center"
    }
})

export default Select;