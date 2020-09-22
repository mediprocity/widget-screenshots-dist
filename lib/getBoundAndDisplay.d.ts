import { Rectangle } from 'electron';
export interface Display extends Rectangle {
    id: number;
}
export interface BoundAndDisplay {
    bound: Rectangle;
    display: Display;
}
declare const _default: () => BoundAndDisplay;
export default _default;
