import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class ModalHelper {
  constructor(private modalSrv: NzModalService) {}

  /**
     * Open a modal, filter some events before processing callback
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     *
     * Success:
     * this.subject.destroy('onOk');
     * To pass data to next event 
     * 
     *  this.subject.next(data);
     *  this.subject.destroy();
     *
     * Close:
     * this.subject.destroy();
     *
     * @param {*} comp Component
     * @param {*} [params] Component parameters
     * @param {('sm' | 'lg' | '' | number)} [size='lg'] size, default: 'lg'
     * @param {*} [options] Modal config interface
     */
  open(comp: any, params?: any, size: 'sm' | 'lg' | '' | number = 'lg', options?: any): Observable<any> {
    let cls = '',
      width = '';
    if (size) {
      if (typeof size === 'number') {
        width = `${size}px`;
      } else {
        cls = `modal-${size}`;
      }
    }
    return this.modalSrv
      .open(
        Object.assign(
          {
            wrapClassName: cls,
            content: comp,
            width: width ? width : undefined,
            footer: false,
            componentParams: params
          },
          options || {}
        )
      )
      .filter((res: any) => {
        let findIdx = -1;
        if (typeof res === 'string') {
          const resStr = res as string;
          findIdx = ['onShow', 'onShown', 'onHide', 'onHidden', 'onCancel', 'onDestroy'].findIndex(w =>
            resStr.startsWith(w)
          );
        }
        return findIdx === -1;
      });
  }

  /**
     * Static modal, won't disappear when click outside
     */
  static(comp: any, params?: any, size: 'sm' | 'lg' | '' | number = 'lg', options?: any): Observable<any> {
    return this.open(
      comp,
      params,
      size,
      Object.assign(
        {
          maskClosable: false
        },
        options
      )
    );
  }
}
