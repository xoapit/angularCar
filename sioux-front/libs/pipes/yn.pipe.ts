import { PipeTransform, Pipe } from '@angular/core';

/**
 *
 * @example
 * ```html
 * <td [innerHTML]="enabled | yn"></td>
 * ```
 */
@Pipe({ name: 'yn' })
export class YNPipe implements PipeTransform {
  transform(value, yes: string, no: string): string {
    if (value === true) {
      return '<span class="badge badge-success">' + (yes || 'Yes') + '</span>';
    } else {
      return '<span class="badge badge-error">' + (no || 'No') + '</span>';
    }
  }
}
