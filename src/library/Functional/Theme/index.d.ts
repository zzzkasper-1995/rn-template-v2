import {StyleSheet} from 'react-native';

export default Theme;

/** Управляем цвето-темой */
declare namespace Theme {
    type AnyObject<T = {}> = T & {[key: string]: any};


    export function create<T>(styles: AnyObject<T>): AnyObject<T>;
    export function setTheme(name: string): void;
    export function getName(): string;
    export function addEventListener(callback: Function): void;
    export function setColorKit(kit: Object): void;
    export function getColors(): Object;
    export function createStyles(creator: Function): Object;
  
    // inherited from StyleSheet
    // export const flatten: typeof StyleSheet.flatten;
    // export const setStyleAttributePreprocessor: typeof StyleSheet.setStyleAttributePreprocessor;
    // export const hairlineWidth: typeof StyleSheet.hairlineWidth;
    // export const absoluteFillObject: typeof StyleSheet.absoluteFillObject;
    // export const absoluteFill: typeof StyleSheet.absoluteFill;
}