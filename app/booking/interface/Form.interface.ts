interface FormData {
  name: string;
  orgName: string;
  email: string;
  mobile: string;
  countryCode: string;
}

interface FormErrors {
  name?: string;
  orgName?: string;
  email?: string;
  mobile?: string;
}

interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

interface UserDetailsFormProps {
  onSuccess: (data: FormData) => void;
}

export type {FormData, FormErrors, CountryCode, UserDetailsFormProps}