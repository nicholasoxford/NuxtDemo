export const Fields = {
  Input: 'AppInput',
  Select: 'AppSelect'
}

export const countrySchema = [
  {
    fieldType: Fields.Input,
    label: 'Country Name',
    value: 'countryName',
    placeholder: 'Country Name',
    required: true
  },
  {
    fieldType: Fields.Input,
    label: 'Capital',
    value: 'capital',
    placeholder: 'Country Capital',
    required: false
  },
  {
    fieldType: Fields.Select,
    label: 'Continent',
    value: 'continent',
    placeholder: 'Continent',
    options: [{label: 'Africa', value: 'africa'},
    {label: 'Europe', value: 'europe'},
    {label: 'Asia', value: 'asia'},
    {label: 'America', value: 'america'},
    {label: 'Australia', value: 'australia'},
    {label: 'Antartica', value: 'antartica'}],
    required: false
  }
]