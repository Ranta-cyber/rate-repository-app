import React from 'react';
import { Button } from 'react-native-elements';

const InputButton = ({ title, buttonType, buttonColor, ...rest }) => (
    <Button
        {...rest}
        type={buttonType}
        title={title}
        buttonStyle={{ borderColor: buttonColor, borderRadius: 10 }}
        titleStyle={{ color: '#ffffff' }}
    />
)

export default InputButton;