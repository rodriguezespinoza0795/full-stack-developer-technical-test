import React from 'react'
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const MuiDatePicker = ({ control, name, label }: { control: any, name: string, label: string }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                name={name}
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={(value: any) => {
                            onChange(value);
                        }}
                        renderInput={(params: any) => <TextField fullWidth required {...params} />}
                    />
                )}
            />
        </LocalizationProvider>
    )
}


export default MuiDatePicker