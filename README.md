# Pattern Lab for Sustainable Agriculture & Food Systems (SAFS) at MSU

Contact: [Katie Fritz](http://katiemfritz.com)

## Contents
- [Resources](#resources)
- [Stack](#stack)
- [Installing](#installing)
- [Serving in the Browser](#serving-in-the-browser)
- [Editing SAFS Pattern Lab](#editing-safs-pattern-lab)
- [License](#license)


## Resources
- [MSU Web Standards](http://cabs.msu.edu/web/msu-web-standards.html#sResources)
- [MSU Coding Guidelines](http://cabs.msu.edu/web/msu-web-standards.html#s8)
- [Pattern Lab](https://patternlab.io)


## Stack

### Pattern Lab Standard Edition for Twig

[The Standard Edition for Twig]((https://github.com/pattern-lab/edition-php-twig-standard) gives developers and designers a clean and stable base from which to develop a Twig-based pattern library.

The Standard Edition for Twig comes with the following components:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-twig`: [documentation](https://github.com/pattern-lab/patternengine-php-twig#twig-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-twig), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-twig)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-twig-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-twig-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-twig-default)

### Composer

**Please note:** Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. To upgrade the Standard Edition for Twig or to install plug-ins you'll need to [install Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx). We recommend that you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

### Yarn (for Sass and parallel process support): [see setup notes](https://gist.github.com/KatieMFritz/89e2e303f88fae8218767cd385314839)


## Installing

Make sure [Composer is installed globally](https://getcomposer.org/doc/00-intro.md#globally) and Yarn is installed globally (`npm install --global yarn`).

* download or `git clone` this repository to an install location.

* run the following

    ```
    cd install/location
    composer install
    yarn install
    ```

Running `composer install` from a directory containing a `composer.json` file will download all dependencies defined within. Running `yarn install` does the same for the `package.json` file.

## Updating

This project must be updated from the command line. Use the following commands, then address any errors:

    ```
    composer update
    yarn update
    ```

You may need to run `yarn deploy` again after making updates.

_Note: To update Pattern Lab itself, please refer to each component's GitHub repository._

## Serving in the Browser

_This installation uses Yarn to manage dev processes. For the base commands, view the [Pattern Lab Twig Standard Edition docs] (https://github.com/pattern-lab/edition-php-twig-standard#helpful-commands)._

The first time you generate your pattern lab, use the command

    yarn deploy

After that, you should be able to use

    yarn dev

This will start a php server, watch for changes, and also compile scss on the fly.

Then open [http://localhost:8080](http://localhost:8080) in your browser.


## Editing SAFS Pattern Lab

### CSS Architecture

This project builds on Bootstrap 4 (stable beta) to improve the learning curve for other developers and make it more portable and extendable.

It uses Sass ([see setup notes](https://gist.github.com/KatieMFritz/89e2e303f88fae8218767cd385314839)) for more robust organization.

All custom scss files can be found in `source/css/scss`. All scss files are imported into `main.scss`, which gets compiled into `main.css`.

To add new styles:
- First make sure the styles don't exist; use a project-wide search if needed.
- Identify the component you are modifying or adding.
- For new components, add a new scss file in the appropriate folder, with the appropriate prefix.
- Classes should also be given the appropriate prefix.
- Do not use `!important` to override existing styles, unless you are adding a new utility class that can apply to any component.

 _Do not change `pattern-scaffolding.css` - it's a Pattern Lab asset._

### Adding Images
Add images to `source/images`. Reference them with `src="../../images/title.jpg`.


## LICENSE
Pattern HTML and CSS copyright &copy; 2017 [Katie M Fritz, LLC](http://katiemfritz.com). Pattern Lab core and MSU graphics and design principles do not belong to me.

Pattern Lab info:
![license](https://img.shields.io/github/license/pattern-lab/edition-php-twig-standard.svg)
[![Packagist](https://img.shields.io/packagist/v/pattern-lab/edition-twig-standard.svg)](https://packagist.org/packages/pattern-lab/edition-mustache-webdesignday) [![Gitter](https://img.shields.io/gitter/room/pattern-lab/php.svg)](https://gitter.im/pattern-lab/php)
