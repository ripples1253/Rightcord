/** TODO: Finish DateInput */

import * as React from "react"
import { DateConstants } from "./DateRange"

export type DateInputProps = {
    className?: string,
    dateFormat?: string,
    defaultValue: Date,
    filterDate?: () => any,
    isModalInput?: boolean,
    maxDate?: Date,
    minDate?: Date,
    onChange?: () => void,
    selectsStart?: boolean,
    showMonthYearPicker?: boolean,
    startDate?: Date,
    endDate?: Date
    style?: React.CSSProperties
}
export default class DateInput extends React.Component<DateInputProps> {
    static defaultProps:Partial<DateInputProps> = {
        dateFormat: DateConstants.DATE_FORMAT,
        isModalInput: false
    }

    constructor(props:DateInputProps){
        super(props)
        this.state = {
            inputResetKey: 0,
            isCalendarPickerOpen: false,
            calendarRight: null,
            calendarTop: null,
            value: props.defaultValue
        }
    }

    componentDidUpdate(e:DateInputProps){
        const defaultValue = this.props.defaultValue
        const dateFormat = this.props.dateFormat
        
        if (e.defaultValue !== defaultValue && null != defaultValue) {
            
        }
    }
}