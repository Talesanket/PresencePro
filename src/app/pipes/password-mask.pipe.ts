import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordMask'
})
export class PasswordMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''; // Return empty string if value is null or undefined
    const visiblePart = value.slice(0, 3); // Extract the first 3 characters
    const maskedPart = '*'.repeat(value.length - 3); // Mask the rest with asterisks
    return `${visiblePart}${maskedPart}`;
  }
}
