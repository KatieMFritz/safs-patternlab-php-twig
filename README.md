# Pattern Lab for Sustainable Agriculture & Food Systems (SAFS) at MSU

Contact: [Katie Fritz](http://katiemfritz.com)

## Resources
- [MSU Web Standards](http://cabs.msu.edu/web/msu-web-standards.html#sResources)
- [MSU Coding Guidelines](http://cabs.msu.edu/web/msu-web-standards.html#s8)
- [Pattern Lab](https://patternlab.io)

## Stack

### [Pattern Lab Standard Edition for Twig](https://github.com/pattern-lab/edition-php-twig-standard)

The Standard Edition for Twig gives developers and designers a clean and stable base from which to develop a Twig-based pattern library.

The Standard Edition for Twig comes with the following components:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-twig`: [documentation](https://github.com/pattern-lab/patternengine-php-twig#twig-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-twig), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-twig)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-twig-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-twig-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-twig-default)


### Composer

**Please note:** Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. To upgrade the Standard Edition for Twig or to install plug-ins you'll need to [install Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx). We recommend that you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

### Sass support: [see setup notes](https://gist.github.com/KatieMFritz/38dda99e71bb7cef7afa2ff57f63f2f4)

## Installing

Make sure [Composer is installed globally](https://getcomposer.org/doc/00-intro.md#globally).

* download or `git clone` this repository to an install location.

* run the following

    ```
    cd install/location
    composer install
    ```

Running `composer install` from a directory containing a `composer.json` file will download all dependencies defined within.

## Updating Pattern Lab

To update Pattern Lab please refer to each component's GitHub repository.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### List all of the available commands

To list all available commands type:

    php core/console --help

To list the options for a particular command type:

    php core/console --help --[command]

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    php core/console --generate

### Watch for changes and re-generate Pattern Lab

To watch for changes and re-generate the front-end for Pattern Lab type:

    php core/console --watch

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a seperate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## CSS Architecture

The CSS for this project is inspired by Atomic Design principes and these blog posts:
 - https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving
 - https://blog.alexdevero.com/atomic-design-scalable-modular-css-sass/

 It uses Sass ([see setup notes](https://gist.github.com/KatieMFritz/38dda99e71bb7cef7afa2ff57f63f2f4)) for more robust organization.

 All scss files can be found in `source/css/scss`.
 ```
 - 00_base
    - _colors.scss (color variables)
    - _reset.scss
    - _space.scss (spacing variables)
    - _typography.scss (fonts and base typography)
    - _utilities.scss (utility or helper classes; use sparingly)
 - 01_atoms
    - styles applied to atom-level components. Prefix classes with a-.
 - 02_molecules
    - styles applied to molecule-level components. Prefix classes with m-.
 - 03_organisms
    - styles applied to organism-level components. Prefix classes with o-.
 - 04_templates
```
All scss files are imported into `main.scss`, which gets compiled into `main.css`.

To add new styles:
- First make sure the styles don't exist; use a project-wide search if needed.
- Identify the component you are modifying or adding.
- For new components, add a new scss file in the appropriate folder, with the appropriate prefix.
- Classes should also be given the appropriate prefix.
- Do not use `!important` to override existing styles, unless you are adding a new utility class that can apply to any component.

 _Do not change `pattern-scaffolding.css` - it's a Pattern Lab asset._

### Adding Images
Add images to 'public/images'. The image pipeline from 'source' isn't working.

### LICENSE
pattern HTML and CSS copyright 2017 Katie M Fritz, LLC. Pattern Lab and MSU graphics do not belong to me.

Pattern Lab licensing:
![license](https://img.shields.io/github/license/pattern-lab/edition-php-twig-standard.svg)
[![Packagist](https://img.shields.io/packagist/v/pattern-lab/edition-twig-standard.svg)](https://packagist.org/packages/pattern-lab/edition-mustache-webdesignday) [![Gitter](https://img.shields.io/gitter/room/pattern-lab/php.svg)](https://gitter.im/pattern-lab/php)
