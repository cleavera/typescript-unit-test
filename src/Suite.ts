import {Test} from './Test';
import {IRunnable} from "./interfaces/IRunnable.interface";
import {ISetupFunction} from "./interfaces/ISetup.interface";

export class Suite implements IRunnable {
    description: string;
    setup: ISetupFunction[];
    suites: Suite[];
    tests: Test[];

    constructor(description: string) {
        this.description = description;
    }

    addSetup(setup: () => void): void {
        this.setup.push(setup);
    }

    addSuite(suite: Suite): void {
        this.suites.push(suite);
    }

    addTest(description: string, fn: () => void): void {
        this.tests.push(new Test(description, fn));
    }

    run(setup?: ISetupFunction[] = []) {
        setup = setup.concat(this.setup);

        this.tests.forEach((test: Test) => {
            test.run(setup);
        });

        this.suites.forEach((suite: Suite) => {
            suite.run(setup);
        })
    }
}