import { ISpy } from './interfaces/ISpy.interface';
export declare function Spy(label: string): ISpy;
export declare function SpyObject(label: string, methods: string[]): {
    [key: string]: ISpy;
};
