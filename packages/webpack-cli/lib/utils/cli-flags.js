const { logger } = require('@webpack-cli/logger');
const StatsGroup = require('../groups/StatsGroup');

const HELP_GROUP = 'help';
const CONFIG_GROUP = 'config';
const BASIC_GROUP = 'basic';
const OUTPUT_GROUP = 'output';
const ADVANCED_GROUP = 'advanced';
const DISPLAY_GROUP = 'stats';
const ZERO_CONFIG_GROUP = 'zero-config';

module.exports = {
    groups: {
        HELP_GROUP,
        CONFIG_GROUP,
        BASIC_GROUP,
        OUTPUT_GROUP,
        ADVANCED_GROUP,
        DISPLAY_GROUP,
        ZERO_CONFIG_GROUP,
    },
    commands: [
        {
            name: 'init',
            alias: 'c',
            type: String,
            usage: 'init | init <scaffold>',
            description: 'Initialize a new webpack configuration',
        },
        {
            name: 'migrate',
            type: String,
            usage: 'migrate',
            description: 'Migrate a configuration to a new version',
        },
        {
            name: 'loader',
            scope: 'external',
            alias: 'l',
            type: String,
            usage: 'loader',
            description: 'Scaffold a loader repository',
        },
        {
            name: 'plugin',
            alias: 'p',
            scope: 'external',
            type: String,
            usage: 'plugin',
            description: 'Scaffold a plugin repository',
        },
        {
            name: 'info',
            scope: 'external',
            type: String,
            usage: 'info [options] [output-format]',
            description: 'Outputs information about your system and dependencies',
            flags: [
                {
                    name: 'output-json',
                    type: Boolean,
                    group: OUTPUT_GROUP,
                    description: 'To get the output as JSON',
                },
                {
                    name: 'output-markdown',
                    type: Boolean,
                    group: OUTPUT_GROUP,
                    description: 'To get the output as markdown',
                },
                {
                    name: 'help',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Shows help',
                },
                {
                    name: 'version',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Show version number of webpack-cli',
                },
                {
                    name: 'system',
                    alias: 's',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'System information ( OS, CPU )',
                },
                {
                    name: 'binaries',
                    alias: 'b',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Installed binaries (Node, yarn, npm)',
                },
                {
                    name: 'browsers',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Installed web browsers',
                },
                {
                    name: 'npmg',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Globally installed NPM packages ( webpack & webpack-cli only )',
                },
                {
                    name: 'npmPackages',
                    type: Boolean,
                    group: BASIC_GROUP,
                    description: 'Info about packages related to webpack installed in the project',
                },
            ],
        },
        {
            name: 'serve',
            scope: 'external',
            type: String,
            usage: 'serve',
            description: 'Run the webpack Dev Server',
        },
    ],
    core: [
        {
            name: 'entry',
            usage: '--entry <path to entry file> e.g. ./src/main.js',
            type: String,
            defaultOption: true,
            group: BASIC_GROUP,
            description: 'The entry point of your application.',
            link: 'https://webpack.js.org/concepts/#entry',
        },
        {
            name: 'config',
            usage: '--config <path to webpack configuration file> e.g. ./webpack.config.js',
            alias: 'c',
            type: String,
            defaultValue: null,
            group: CONFIG_GROUP,
            description: 'Provide path to a webpack configuration file',
            link: 'https://webpack.js.org/configuration/',
        },
        {
            name: 'merge',
            usage: '--merge <path to configuration to be merged> e.g. ./webpack.config.js',
            alias: 'm',
            type: String,
            group: CONFIG_GROUP,
            description: 'Merge a configuration file using webpack-merge',
            link: 'https://github.com/survivejs/webpack-merge',
        },
        {
            name: 'progress',
            usage: '--progress',
            type: Boolean,
            group: BASIC_GROUP,
            description: 'Print compilation progress during build',
        },
        {
            name: 'silent',
            usage: '--silent',
            type: Boolean,
            group: DISPLAY_GROUP,
            description: 'Disable any output that webpack makes',
        },
        {
            name: 'help',
            usage: '--help',
            type: Boolean,
            group: HELP_GROUP,
            description: 'Outputs list of supported flags',
        },
        {
            name: 'defaults',
            usage: '--defaults',
            type: Boolean,
            group: BASIC_GROUP,
            description: 'Allow webpack to set defaults aggresively',
            link: 'https://github.com/webpack-contrib/webpack-defaults',
        },
        {
            name: 'output',
            usage: '--output <path to output directory> e.g. ./dist/',
            alias: 'o',
            group: OUTPUT_GROUP,
            type: String,
            description: 'Output location of the file generated by webpack',
            link: 'https://webpack.js.org/concepts/#output',
        },
        {
            name: 'plugin',
            usage: '--plugin',
            group: ADVANCED_GROUP,
            type: String,
            description: 'Load a given plugin',
            link: 'https://webpack.js.org/plugins/',
        },
        {
            name: 'global',
            usage: '--global myVar ./global.js',
            alias: 'g',
            type: String,
            multiple: true,
            group: ADVANCED_GROUP,
            description: 'Declares and exposes a global variable',
        },
        {
            name: 'target',
            alias: 't',
            type: String,
            group: ADVANCED_GROUP,
            description: 'Sets the build target',
            link: 'https://webpack.js.org/configuration/target/#target',
        },
        {
            name: 'watch',
            usage: '--watch',
            type: Boolean,
            alias: 'w',
            group: BASIC_GROUP,
            description: 'Watch for files changes',
            link: 'https://webpack.js.org/configuration/watch/',
        },
        {
            name: 'hot',
            usage: '--hot',
            alias: 'h',
            type: Boolean,
            group: ADVANCED_GROUP,
            description: 'Enables Hot Module Replacement',
            link: 'https://webpack.js.org/concepts/hot-module-replacement/',
        },
        {
            name: 'sourcemap',
            usage: '--sourcemap <sourcemap|eval|>',
            type: String,
            alias: 's',
            defaultValue: undefined,
            group: BASIC_GROUP,
            description: 'Determine source maps to use',
            link: 'https://webpack.js.org/configuration/devtool/#devtool',
        },
        {
            name: 'prefetch',
            usage: 'webpack --prefetch <request>',
            type: String,
            group: ADVANCED_GROUP,
            description: 'Prefetch this request',
            link: 'https://webpack.js.org/plugins/prefetch-plugin/',
        },
        {
            name: 'json',
            usage: 'webpack --json',
            type: Boolean,
            alias: 'j',
            description: 'Prints result as JSON',
            group: DISPLAY_GROUP,
        },
        {
            name: 'dev',
            usage: '--dev',
            alias: 'd',
            type: Boolean,
            defaultValue: undefined,
            group: ZERO_CONFIG_GROUP,
            description: 'Run development build',
            link: 'https://webpack.js.org/concepts/#mode',
        },
        {
            name: 'prod',
            alias: 'p',
            usage: '--prod',
            type: Boolean,
            defaultValue: undefined,
            group: ZERO_CONFIG_GROUP,
            description: 'Run production build',
            link: 'https://webpack.js.org/concepts/#mode',
        },
        {
            name: 'mode',
            usage: '--mode <development | production>',
            type: (value) => {
                if (value === 'development' || value === 'production' || value === 'none') {
                    return value ;
                } else {
                    logger.warn('You provided an invalid value for "mode" option.');
                    return 'production' ;
                }
            },
            group: ZERO_CONFIG_GROUP,
            description: 'Defines the mode to pass to webpack',
            link: 'https://webpack.js.org/concepts/#mode'
        },
        {
            name: 'no-mode',
            usage: '--no-mode',
            type: Boolean,
            group: ZERO_CONFIG_GROUP,
            description: 'Sets mode="none" which disables any default behavior',
            link: 'https://webpack.js.org/concepts/#mode',
        },
        {
            name: 'version',
            usage: '--version',
            type: Boolean,
            group: BASIC_GROUP,
            description: 'Get current version',
        },
        {
            name: 'node-args',
            usage: '--node-args "--max-old-space-size=1024"',
            type: String,
            multiple: true,
            group: BASIC_GROUP,
            description: 'NodeJS flags',
        },
        {
            name: 'stats',
            usage: 'webpack --stats verbose',
            type: value => {
                if (StatsGroup.validOptions().includes(value)) {
                    return value;
                }
                logger.warn('No value recognised for "stats" option');
                return 'normal';
            },
            group: DISPLAY_GROUP,
            description: 'It instructs webpack on how to treat the stats',
            link: 'https://webpack.js.org/configuration/stats/#stats',
        },
        {
            name: 'verbose',
            usage: 'webpack --verbose',
            type: Boolean,
            group: DISPLAY_GROUP,
            description: 'It tells webpack to output all the information',
        },
        /* 		{
			name: "analyze",
			type: Boolean,
			group: BASIC_GROUP,
			description: "analyze build for performance improvements"
		}, */
        /* 		{
			name: "interactive",
			type: Boolean,
			alias: "i",
			description: "Use webpack interactively",
			group: BASIC_GROUP
		} */
    ],
};
