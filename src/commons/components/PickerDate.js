import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import {Button, Text} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const PickerDate = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View
            style={{
                marginTop: 20,
                marginBottom: 10
            }}
        >
            <Text style={{textAlign: 'center', marginBottom: 10}}>{`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <Button
                mode="contained"
                onPress={showDatepicker} >
                {props.title}
            </Button>
        </View>
    );
};

export default PickerDate;
