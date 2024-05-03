export interface EmployeeFormProps {
    name: string,
    surname: string,
    age: string,
    position: string,
    rulesOfUsage: boolean,
}

export enum LOGIN_FIELD_NAMES {
    NAME = 'name',
    SURNAME = 'surname',
    AGE = 'age',
    POSITION = 'position',
    RULESOFUSAGE = 'rulesOfUsage',
}
