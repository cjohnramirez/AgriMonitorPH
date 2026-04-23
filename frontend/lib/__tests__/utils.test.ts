import { 
  isStockCritical, 
  formatPHP, 
  calculatePctChange, 
  getRiskColor, 
  convertToKg 
} from '../utils';

describe('AgriMonitorPH Unit Test Suite', () => {

  // Test 1: Critical Stock Threshold (Validation of Unit Level logic)
  test('isStockCritical should return true only for values below 500,000', () => {
    expect(isStockCritical(499999)).toBe(true);
    expect(isStockCritical(500000)).toBe(false); // Boundary analysis
    expect(isStockCritical(600000)).toBe(false);
  });

  // Test 2: Currency Formatting (Ensures locale-specific UI requirements)
  test('formatPHP should format numbers to Philippine Peso string', () => {
    // Note: Use regex to match PHP symbol and non-breaking spaces
    expect(formatPHP(2980)).toMatch(/PHP\s?2,980.00/);
  });

  // Test 3: Data Trends (Validates calculation logic for Market Outlook)
  test('calculatePctChange should return correctly signed percentage strings', () => {
    expect(calculatePctChange(110, 100)).toBe('+10.0%');
    expect(calculatePctChange(90, 100)).toBe('-10.0%');
    expect(calculatePctChange(100, 100)).toBe('0.0%');
  });

  // Test 4: Visual Mapping (Validates Severity/Status color mapping)
  test('getRiskColor should map ENSO status to correct CSS classes', () => {
    expect(getRiskColor('La Niña Watch')).toBe('bg-red-500');
    expect(getRiskColor('Neutral')).toBe('bg-green-500');
    expect(getRiskColor('Unknown Status')).toBe('bg-slate-500');
  });

  // Test 5: Mathematical Conversions (Ensures data integrity for reports)
  test('convertToKg should accurately multiply MT by 1000', () => {
    expect(convertToKg(1.5)).toBe(1500);
    expect(convertToKg(0)).toBe(0);
  });

});