// Type definitions for jest-preset-stylelint 3.0
// Project: https://github.com/stylelint/jest-preset-stylelint
// Definitions by: Marc Fallows <https://github.com/marcfallows>

declare var testRule: JestPresetStylelint.TestRule;

declare namespace JestPresetStylelint {

    interface TestRule {
        (schema: Schema): void;
    }

    interface Schema {
        plugins: string[],
        ruleName: string;
        config?: any;
        fix?: boolean,
        skipBasicChecks?: boolean,
        syntax?: Syntax;
        accept?: AcceptCase[];
        reject?: RejectCase[];
    }

    type Syntax = "css-in-js"
        | "html"
        | "less"
        | "markdown"
        | "sass"
        | "scss"
        | "sugarss";

    interface Case {
        code: string;
        description?: string;
    }

    interface Report {
        message?: string;
        line?: number;
        column?: number;
    }

    interface AcceptCase extends Case {
    }

    interface RejectCase extends Case, Report {
        fixed?: string,
        only?: boolean;
        warnings?: Report[];
    }
}
