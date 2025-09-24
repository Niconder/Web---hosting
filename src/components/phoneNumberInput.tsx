import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { getCountries, getCountryCallingCode, isValidPhoneNumber, parsePhoneNumber, formatPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Input } from './ui/input';
import { cn } from "./lib/utils";

// Function to get country code from phone prefix
export const getCountryFromPrefix = (prefix) => {
    // Remove the '+' if present
    const cleanedPrefix = prefix.replace(/^\+/, '');

    // Find the country that matches this calling code
    const matchedCountry = getCountries().find(country => {
        try {
            return getCountryCallingCode(country) === cleanedPrefix;
        } catch (error) {
            return false;
        }
    });
    return matchedCountry;
};

// Define prop types for the component
PhoneNumberInput.propTypes = {
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    onCountryChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    onSearchTermChange: PropTypes.func,
    error: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool
};

export default function PhoneNumberInput({
    defaultCountry = 'US',
    value = '',
    onValueChange,
    onCountryChange,
    searchTerm = '',
    onSearchTermChange = () => {},
    error = '',
    helperText = '',
    required = false
}) {
    const [showSearch, setShowSearch] = useState(false);
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        if (!defaultCountry || defaultCountry === '') {
            onCountryChange('US');
        }
    }, [defaultCountry, onCountryChange]);
    
    useEffect(() => {
        setLocalSearchTerm(searchTerm);
    }, [searchTerm]);

    // Handle clicks outside the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    // Create a list of country codes with more detailed information
    const countryCodes = getCountries().map(country => ({
        code: country,
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country),
        callingCode: getCountryCallingCode(country)
    })).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

    // Internal error validation
    const validatePhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return !required;
        try {
            // Try different formats for validation
            return (
                isValidPhoneNumber(phoneNumber) || 
                isValidPhoneNumber(`+${getCountryCallingCode(defaultCountry)}${phoneNumber}`) ||
                isValidPhoneNumber(`${defaultCountry}${phoneNumber}`)
            );
        } catch (e) {
            return false;
        }
    };

    const handlePhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        
        // Format the phone number as user types
        let formattedNumber = phoneNumber;
        
        // Only format if it doesn't start with '+' (user is entering local number)
        if (phoneNumber && !phoneNumber.startsWith('+')) {
            try {
                // Try to format the number with the selected country code
                formattedNumber = formatPhoneNumber(
                    `+${getCountryCallingCode(defaultCountry)}${phoneNumber.replace(/\D/g, '')}`
                ) || phoneNumber;
                
                // If formatting failed, keep original input
                if (!formattedNumber) formattedNumber = phoneNumber;
            } catch (e) {
                formattedNumber = phoneNumber;
            }
        }
        
        // Call the onValueChange prop with the formatted phone number
        onValueChange(formattedNumber);
    };

    // Handle local search term changes
    const handleLocalSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        setLocalSearchTerm(newSearchTerm);
        if (onSearchTermChange) {
            onSearchTermChange(newSearchTerm);
        }
    };
    
    // Filter countries based on search term
    const filteredCountries = countryCodes.filter(country =>
        country.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        country.code.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        country.callingCode.toString().includes(localSearchTerm)
    );

    // Determine if the phone number is invalid
    const isInvalid = value ? !validatePhoneNumber(value) : false;

    function identifyCountry(phoneNumber) {
        try {
            const parsedNumber = parsePhoneNumber(phoneNumber);
            if (parsedNumber && parsedNumber.isValid && parsedNumber.isValid()) {
                return parsedNumber.country;
            }
            return null;
        } catch(e) {
            return null;
        }
    }

    // Try to detect country from the phone number if it has a country code
    let countryCode;
    
    if (value && value.startsWith('+')) {
        // If the value starts with +, try to identify the country
        countryCode = identifyCountry(value) || getCountryFromPrefix(value.split(' ')[0].substring(1));
    } else if (defaultCountry && defaultCountry.startsWith('+')) {
        // If defaultCountry is a prefix like +66
        countryCode = getCountryFromPrefix(defaultCountry);
    } else {
        // Use the provided defaultCountry
        countryCode = defaultCountry;
    }
    
    // Fallback to US if no country could be determined
    if (!countryCode) countryCode = 'US';

    return (
        <div className="w-full">
            <div className="flex flex-col w-full">
                <div className="flex items-center w-full gap-2">
                    {/* Country Selector */}
                    <div className="relative w-[100px]" ref={dropdownRef}>
                        <div 
                            className={cn(
                                "h-14 rounded-xl border-[1.6px] border-[#cccccc] px-2 py-[10px] flex items-center justify-between cursor-pointer",
                                showSearch && "border-[#00398e]"
                            )}
                            onClick={() => setShowSearch(!showSearch)}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
                                    width="20"
                                    alt={`${countryCodes.find(c => c.code === countryCode)?.name || ''} flag`}
                                    loading="lazy"
                                />
                                <span>+{getCountryCallingCode(countryCode || "US")}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {showSearch ? (
                                    <path d="m18 15-6-6-6 6"/>
                                ) : (
                                    <path d="m6 9 6 6 6-6"/>
                                )}
                            </svg>
                        </div>
                        
                        {/* Country Dropdown */}
                        {showSearch && (
                            <div className="absolute z-10 w-[300px] mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-[300px] overflow-y-auto">
                                {/* Search Input */}
                                <div className="sticky top-0 z-10 p-2 bg-white border-b border-gray-200">
                                    <Input
                                        placeholder="Search countries"
                                        value={localSearchTerm}
                                        onChange={handleLocalSearchChange}
                                        className="h-9 w-full"
                                        autoFocus
                                    />
                                </div>
                                
                                {/* Country List */}
                                <div>
                                    {filteredCountries.map((country) => (
                                        <div 
                                            key={country.code} 
                                            className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                onCountryChange(country.code);
                                                setShowSearch(false);
                                            }}
                                        >
                                            <img
                                                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                                width="20"
                                                alt={`${country.name} flag`}
                                                loading="lazy"
                                            />
                                            <span>{country.name} (+{country.callingCode})</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="relative flex-1">
                        <Input
                            id="phone-number"
                            value={value}
                            onChange={handlePhoneNumberChange}
                            className={cn(
                                "h-14 rounded-xl border-[1.6px] border-[#cccccc] pl-12 pr-4 py-[11px]",
                                (isInvalid || !!error) && "border-red-500"
                            )}
                            required={required}
                            placeholder="Enter phone number"
                        />
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                            +{getCountryCallingCode(countryCode || "US")}
                        </div>
                    </div>
                </div>
                
                {/* Error Message */}
                {(isInvalid || error) && (
                    <p className="text-red-500 text-xs mt-1 text-right">
                        {error || helperText || "Invalid phone number format"}
                    </p>
                )}
            </div>
        </div>
    );
}
