import React from 'react';

// Numeric input with optional prefix (currency symbol) and suffix (unit).
// Value is the raw numeric string (no commas). Display value is shown with
// thousand separators. Decimal point is preserved during typing (e.g.
// "6." stays "6." until the next char arrives).
//
// Usage:
//   <FormattedInput value={principal} onChange={setPrincipal} prefix="$" />
//   <FormattedInput value={rate} onChange={setRate} suffix="%" decimal />
//   <FormattedInput value={years} onChange={setYears} suffix="年" />
export default function FormattedInput({
  id,
  value,
  onChange,
  prefix,
  suffix,
  decimal = false,
  placeholder,
  ariaLabel,
}) {
  const display = (() => {
    if (value === '' || value == null) return '';
    const str = String(value);
    // Allow lone "-" or trailing "."
    if (str === '-' || str === '.') return str;
    const isNeg = str.startsWith('-');
    const abs = isNeg ? str.slice(1) : str;
    if (!/^\d*\.?\d*$/.test(abs)) return str;
    const [intPart, decPart] = abs.split('.');
    const intFormatted = intPart ? parseInt(intPart, 10).toLocaleString('en-US') : '';
    let out = (isNeg ? '-' : '') + intFormatted;
    if (str.includes('.')) out += '.' + (decPart || '');
    return out;
  })();

  const handleChange = (e) => {
    const raw = e.target.value.replace(/,/g, '');
    if (raw === '' || raw === '-') return onChange(raw);
    const re = decimal ? /^-?\d*\.?\d*$/ : /^-?\d*$/;
    if (re.test(raw)) onChange(raw);
  };

  return (
    <div className={`formatted-input ${prefix ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''}`}>
      {prefix && <span className="input-prefix" aria-hidden="true">{prefix}</span>}
      <input
        id={id}
        type="text"
        inputMode={decimal ? 'decimal' : 'numeric'}
        value={display}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
      {suffix && <span className="input-suffix" aria-hidden="true">{suffix}</span>}
    </div>
  );
}
