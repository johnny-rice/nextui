# @heroui/progress

## 2.2.20

### Patch Changes

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

## 2.2.19

### Patch Changes

- [`e489af8`](https://github.com/heroui-inc/heroui/commit/e489af83c189d0b42dca1b0afca1f5d003cd6033) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - ## Consolidated Changes

  ### Major Update

  - TailwindCSS v4

  ### Bug Fixes & Improvements

  #### Theme & Styling

  - fix rotate transition (#5441)
  - fix incorrect target theme (#5469)
  - fixed missing radius styles in th and td in Table (#4988)
  - fixed transition (#5409)
  - fix text selection in table (#5413)
  - Fix transition scale (#5271)
  - fix outline styles (#5266)

  #### Components

  **Toast**

  - Renaming loadingIcon to loadingComponent
  - Fix toast items closing in reverse order. Toasts now close in proper FIFO instead of LIFO (#5096)
  - Remove the bottom extension of the toast (#5231)
  - Enable programmatically closing a toast with a specific key (#5084)

  **Slider**

  - introduce `getTooltipValue` prop for custom tooltip value (#4741)
  - fixed slider component NaN values when min and max are the same value (#5014)

  **Select**

  - add `isClearable` and `onClear` prop to Select component (#2239)

  **Calendar**

  - Replace rectangle intersection detection with center-point distance calculation to make the calendar picker more resilient when browser zoom is changed. The new approach finds the closest picker item to the highlight element's center, preventing mismatches between displayed and selected year / month. (#5117)

  **Input**

  - fix `Input` accessibility label duplication (#5150)

  **Date Input**

  - add 'outside-top' prop to input (#3058)

  **Table**

  - support custom sort icon in Table (#5223)
  - remove `removeWrapper` from virtualized table (#4995)

  **Autocomplete**

  - do not render selector button if selector icon is null (#5423)

  **Image & Avatar**

  - fixed image src double fetch issue (#3847)

  #### System & Core

  - add useInputLabelPlacement
  - remove `@heroui/aria-utils` dependency

  #### Hooks & Utilities

  - fix use-theme logic
  - Fix skeleton animate
  - bump RA versions
  - Draggable modal will be scrollable in mobile devices (#5280)
  - refactor: overlay & interactOutside

- Updated dependencies [[`e489af8`](https://github.com/heroui-inc/heroui/commit/e489af83c189d0b42dca1b0afca1f5d003cd6033)]:
  - @heroui/shared-utils@2.1.10
  - @heroui/react-utils@2.1.12
  - @heroui/use-is-mounted@2.1.8

## 2.2.19-beta.2

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

- Updated dependencies [[`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32)]:
  - @heroui/shared-utils@2.1.10-beta.7
  - @heroui/react-utils@2.1.12-beta.5
  - @heroui/use-is-mounted@2.1.8-beta.7

## 2.2.19-beta.1

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

- Updated dependencies [[`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8)]:
  - @heroui/shared-utils@2.1.10-beta.6
  - @heroui/react-utils@2.1.12-beta.4
  - @heroui/use-is-mounted@2.1.8-beta.6

## 2.2.19-beta.0

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

- Updated dependencies [[`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0)]:
  - @heroui/shared-utils@2.1.10-beta.5
  - @heroui/react-utils@2.1.12-beta.3
  - @heroui/use-is-mounted@2.1.8-beta.5
  - @heroui/system@2.4.19-beta.0

## 2.2.18

### Patch Changes

- [#5374](https://github.com/heroui-inc/heroui/pull/5374) [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed) Thanks [@wingkwong](https://github.com/wingkwong)! - bump system peer dependencies

## 2.2.17

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - remove unused dependencies

- Updated dependencies [[`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56)]:
  - @heroui/react-utils@2.1.11

## 2.2.16

### Patch Changes

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.2.15

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

- Updated dependencies [[`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf)]:
  - @heroui/use-is-mounted@2.1.7
  - @heroui/react-utils@2.1.10
  - @heroui/shared-utils@2.1.9

## 2.2.14

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

- Updated dependencies [[`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e)]:
  - @heroui/shared-utils@2.1.8
  - @heroui/react-utils@2.1.9

## 2.2.13

### Patch Changes

- [#5060](https://github.com/heroui-inc/heroui/pull/5060) [`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump

## 2.2.12

### Patch Changes

- [#4911](https://github.com/heroui-inc/heroui/pull/4911) [`6293536`](https://github.com/heroui-inc/heroui/commit/62935362fb712c5e7c36e39db72cd586f4500a5c) Thanks [@waleed-mobasher](https://github.com/waleed-mobasher)! - add RTL support to progress (#4908)

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.2.11

### Patch Changes

- v2.7.4

- Updated dependencies []:
  - @heroui/use-is-mounted@2.1.6
  - @heroui/react-utils@2.1.8
  - @heroui/shared-utils@2.1.7

## 2.2.10

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/shared-utils@2.1.6
  - @heroui/react-utils@2.1.7
  - @heroui/use-is-mounted@2.1.5

## 2.2.9

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/use-is-mounted@2.1.4
  - @heroui/react-utils@2.1.6
  - @heroui/shared-utils@2.1.5

## 2.2.8

### Patch Changes

- [`4ff87ca`](https://github.com/heroui-inc/heroui/commit/4ff87ca7afccd2c3db0b145156a8357b2b51e7b5) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.7.0
  - Tailwind variants upgraded to the latest version, classnames adjusted, tests fixed
  - Bump RA versions
  - Various package updates and improvements across the HeroUI component library
  - Fixed reversed navigation behavior of nextButton and prevButton in the RTL calendar (#4541)
  - Adding support for global labelPlacement prop (ENG-1694)
  - Avoid showing onClick deprecation warning for internal onClick (#4549, #4546)
  - Fixed unexpected scrollShadow on virtualized listbox (#4553)
  - Fix SelectItem, ListboxItem, and AutocompleteItem not to accept value props (#2283)
  - New Components and Features:
    - Introduce NumberInput component
    - Introduce Toast component (#2560)
  - Various improvements and bug fixes across components:
    - Enhanced accessibility features and ARIA support
    - Updated component styling and theme configurations
    - Performance optimizations and code cleanup
    - RTL support improvements
    - Better type safety and prop validation
- Updated dependencies [[`4ff87ca`](https://github.com/heroui-inc/heroui/commit/4ff87ca7afccd2c3db0b145156a8357b2b51e7b5)]:
  - @heroui/use-is-mounted@2.1.3
  - @heroui/react-utils@2.1.5
  - @heroui/shared-utils@2.1.4

## 2.2.7

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

- Updated dependencies [[`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e)]:
  - @heroui/shared-utils@2.1.3
  - @heroui/react-utils@2.1.4
  - @heroui/use-is-mounted@2.1.2

## 2.2.6

### Patch Changes

- Updated dependencies [[`e7ff673`](https://github.com/heroui-inc/heroui/commit/e7ff6730d7e891f1e9e3ca232b1faaebc5aedef2)]:
  - @heroui/react-utils@2.1.3

## 2.2.5

### Patch Changes

- Updated dependencies [[`77206bc`](https://github.com/heroui-inc/heroui/commit/77206bc62596894d038b9715e40b361fec286c10), [`5f388fc`](https://github.com/heroui-inc/heroui/commit/5f388fc68c7db7f852432e73386686d919d44d31)]:
  - @heroui/shared-utils@2.1.2
  - @heroui/react-utils@2.1.2

## 2.2.4

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

## 2.2.3

### Patch Changes

- [#4255](https://github.com/heroui-inc/heroui/pull/4255) [`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

## 2.2.2

### Patch Changes

- [#4247](https://github.com/heroui-inc/heroui/pull/4247) [`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

## 2.2.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @heroui/use-is-mounted@2.1.1
  - @heroui/react-utils@2.1.1
  - @heroui/shared-utils@2.1.1

## 2.2.0

### Minor Changes

- [`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - This release includes several improvements and bug fixes:

  - Updated react-aria version across all components
  - Improved Drawer styles and transitions
  - Fixed missing peer dependencies for framer-motion
  - Fixed menu item classNames functionality
  - Added isClearable prop to Textarea component
  - Fixed label placement issues in Input and Select components
  - Improved table keyboard navigation with new isKeyboardNavigationDisabled prop
  - Fixed UI sliding issues with helper wrapper in Input and Select
  - Updated use-image hook to avoid Next.js hydration issues
  - Replaced RTL-specific styles with logical properties
  - Fixed textarea label squish issue
  - Bumped tailwind-merge version
  - Applied tw nested group fixes
  - Fixed fullWidth variant in input and select components
  - Moved circular-progress tv to progress
  - Changed ListboxItem key to optional
  - Fixed autocomplete clear button behavior
  - Updated Select label placement logic
  - Added missing framer-motion peer dependencies
  - Removed layoutNode prop from Table due to react-aria update
  - Virtualization added to Autocomplete

### Patch Changes

- [#4226](https://github.com/heroui-inc/heroui/pull/4226) [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- Updated dependencies [[`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @heroui/use-is-mounted@2.1.0
  - @heroui/react-utils@2.1.0
  - @heroui/shared-utils@2.1.0

## 2.1.0-beta.9

### Patch Changes

- [`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @heroui/use-is-mounted@2.0.7-beta.5
  - @heroui/react-utils@2.0.18-beta.8
  - @heroui/shared-utils@2.0.9-beta.8

## 2.1.0-beta.8

### Patch Changes

- [#3036](https://github.com/heroui-inc/heroui/pull/3036) [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

## 2.1.0-beta.7

### Patch Changes

- [#4092](https://github.com/heroui-inc/heroui/pull/4092) [`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @heroui/use-is-mounted@2.0.7-beta.4
  - @heroui/react-utils@2.0.18-beta.7
  - @heroui/shared-utils@2.0.9-beta.7

## 2.1.0-beta.6

### Patch Changes

- [#4086](https://github.com/heroui-inc/heroui/pull/4086) [`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @heroui/use-is-mounted@2.0.7-beta.3
  - @heroui/react-utils@2.0.18-beta.6
  - @heroui/shared-utils@2.0.9-beta.6

## 2.1.0-beta.5

### Patch Changes

- [#4083](https://github.com/heroui-inc/heroui/pull/4083) [`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @heroui/use-is-mounted@2.0.7-beta.2
  - @heroui/react-utils@2.0.18-beta.5
  - @heroui/shared-utils@2.0.9-beta.5

## 2.1.0-beta.4

### Patch Changes

- Updated dependencies [[`5339b2571`](https://github.com/heroui-inc/heroui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @heroui/shared-utils@2.0.9-beta.4
  - @heroui/react-utils@2.0.18-beta.4

## 2.1.0-beta.3

### Patch Changes

- [#4010](https://github.com/heroui-inc/heroui/pull/4010) [`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @heroui/use-is-mounted@2.0.7-beta.1
  - @heroui/react-utils@2.0.18-beta.3
  - @heroui/shared-utils@2.0.9-beta.3

## 2.1.0-beta.2

### Patch Changes

- [#4008](https://github.com/heroui-inc/heroui/pull/4008) [`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @heroui/use-is-mounted@2.0.7-beta.0
  - @heroui/react-utils@2.0.18-beta.2
  - @heroui/shared-utils@2.0.9-beta.2

## 2.1.0-beta.1

### Patch Changes

- [#3990](https://github.com/heroui-inc/heroui/pull/3990) [`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @heroui/react-utils@2.0.18-beta.1
  - @heroui/shared-utils@2.0.9-beta.1

## 2.1.0-beta.0

### Minor Changes

- [#3732](https://github.com/heroui-inc/heroui/pull/3732) [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- Updated dependencies [[`0cf91395c`](https://github.com/heroui-inc/heroui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/heroui-inc/heroui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/heroui-inc/heroui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/heroui-inc/heroui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/heroui-inc/heroui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/heroui-inc/heroui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/heroui-inc/heroui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/heroui-inc/heroui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/heroui-inc/heroui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/heroui-inc/heroui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/heroui-inc/heroui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/heroui-inc/heroui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @heroui/theme@2.3.0-beta.0
  - @heroui/system@2.3.0-beta.0
  - @heroui/shared-utils@2.0.9-beta.0
  - @heroui/react-utils@2.0.18-beta.0

## 2.0.34

### Patch Changes

- Updated dependencies [[`f36df4362`](https://github.com/heroui-inc/heroui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @heroui/shared-utils@2.0.8
  - @heroui/react-utils@2.0.17

## 2.0.33

### Patch Changes

- [#3512](https://github.com/heroui-inc/heroui/pull/3512) [`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @heroui/use-is-mounted@2.0.6
  - @heroui/react-utils@2.0.16
  - @heroui/shared-utils@2.0.7

## 2.0.32

### Patch Changes

- Updated dependencies [[`f5d94f96e`](https://github.com/heroui-inc/heroui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49)]:
  - @heroui/shared-utils@2.0.6
  - @heroui/react-utils@2.0.15

## 2.0.31

### Patch Changes

- [#3240](https://github.com/heroui-inc/heroui/pull/3240) [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- Updated dependencies [[`b9bb06ff3`](https://github.com/heroui-inc/heroui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @heroui/react-utils@2.0.14

## 2.0.30

### Patch Changes

- [#3119](https://github.com/heroui-inc/heroui/pull/3119) [`685995a12`](https://github.com/heroui-inc/heroui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

## 2.0.29

### Patch Changes

- [#2929](https://github.com/heroui-inc/heroui/pull/2929) [`422770cc6`](https://github.com/heroui-inc/heroui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

## 2.0.28

### Patch Changes

- Updated dependencies [[`eccc2f2f3`](https://github.com/heroui-inc/heroui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @heroui/react-utils@2.0.13

## 2.0.27

### Patch Changes

- Updated dependencies []:
  - @heroui/react-utils@2.0.12

## 2.0.26

### Patch Changes

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added
  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated
- Updated dependencies [[`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14)]:
  - @heroui/react-utils@2.0.11
  - @heroui/shared-utils@2.0.5
  - @heroui/use-is-mounted@2.0.5

## 2.0.25

### Patch Changes

- [#2410](https://github.com/heroui-inc/heroui/pull/2410) [`0ce10269c`](https://github.com/heroui-inc/heroui/commit/0ce10269c2eb5b89cdee13e493bc9e2e0b430be9) Thanks [@wingkwong](https://github.com/wingkwong)! - fix incorrect strokeWidth in circular progress (#1790)

## 2.0.24

### Patch Changes

- [#1877](https://github.com/heroui-inc/heroui/pull/1877) [`44ed1056e`](https://github.com/heroui-inc/heroui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated, changeset config changed to update peer dependencies only when out of range

## 2.0.23

### Patch Changes

- [#1874](https://github.com/heroui-inc/heroui/pull/1874) [`38af48faf`](https://github.com/heroui-inc/heroui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated to avoid the peer conflicts issue.

- Updated dependencies []:
  - @heroui/system@2.0.12

## 2.0.22

### Patch Changes

- [`25e86fb41`](https://github.com/heroui-inc/heroui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

- Updated dependencies [[`25e86fb41`](https://github.com/heroui-inc/heroui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187)]:
  - @heroui/system@2.0.11
  - @heroui/theme@2.1.10
  - @heroui/use-is-mounted@2.0.4
  - @heroui/react-utils@2.0.10
  - @heroui/shared-utils@2.0.4

## 2.0.21

### Patch Changes

- Updated dependencies [[`425a034bc`](https://github.com/heroui-inc/heroui/commit/425a034bca4aa5a86cfe4bc47c084366a7ad7e87)]:
  - @heroui/theme@2.1.9
  - @heroui/system@2.0.10
  - @heroui/react-utils@2.0.9

## 2.0.20

### Patch Changes

- [#1600](https://github.com/heroui-inc/heroui/pull/1600) [`b1b30b797`](https://github.com/heroui-inc/heroui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

- Updated dependencies [[`b1b30b797`](https://github.com/heroui-inc/heroui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572)]:
  - @heroui/system@2.0.9
  - @heroui/theme@2.1.8
  - @heroui/use-is-mounted@2.0.3
  - @heroui/react-utils@2.0.8
  - @heroui/shared-utils@2.0.3

## 2.0.19

### Patch Changes

- [#1589](https://github.com/heroui-inc/heroui/pull/1589) [`1612532ee`](https://github.com/heroui-inc/heroui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React aria packages upgraded

- Updated dependencies [[`a3be419cb`](https://github.com/heroui-inc/heroui/commit/a3be419cb3c693ae8cace15f9a863274d759ddb1), [`5c30e0481`](https://github.com/heroui-inc/heroui/commit/5c30e04811ef9f973d6b59107c909db72d9876b5), [`1612532ee`](https://github.com/heroui-inc/heroui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2)]:
  - @heroui/theme@2.1.7
  - @heroui/system@2.0.8

## 2.0.18

### Patch Changes

- Updated dependencies [[`7c8341035`](https://github.com/heroui-inc/heroui/commit/7c8341035dbdd120cd78221b3cabab2e40e7478d)]:
  - @heroui/theme@2.1.6

## 2.0.17

### Patch Changes

- Updated dependencies [[`d61428d9e`](https://github.com/heroui-inc/heroui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23), [`4db10a47e`](https://github.com/heroui-inc/heroui/commit/4db10a47e96ad8315b5b96c2ff15574ac0fdeecc)]:
  - @heroui/theme@2.1.5
  - @heroui/system@2.0.7

## 2.0.16

### Patch Changes

- Updated dependencies [[`043b8420c`](https://github.com/heroui-inc/heroui/commit/043b8420cfb659cbb6bb36404807ec3cc8ac8592), [`641bf0885`](https://github.com/heroui-inc/heroui/commit/641bf0885b6af2d7f36f27d83716a441975a5ca5)]:
  - @heroui/theme@2.1.4
  - @heroui/system@2.0.6

## 2.0.15

### Patch Changes

- Updated dependencies [[`5702287e5`](https://github.com/heroui-inc/heroui/commit/5702287e5622a8f0a0326c7cc0c200808c7971a8)]:
  - @heroui/theme@2.1.3

## 2.0.14

### Patch Changes

- [#1458](https://github.com/heroui-inc/heroui/pull/1458) [`4e94c115`](https://github.com/heroui-inc/heroui/commit/4e94c115281c2774424d687877e036a9af1bce01) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix dropdown trigger events and popover arrow styles

- Updated dependencies [[`4e94c115`](https://github.com/heroui-inc/heroui/commit/4e94c115281c2774424d687877e036a9af1bce01)]:
  - @heroui/theme@2.1.2

## 2.0.13

### Patch Changes

- Updated dependencies [[`cc839cdd`](https://github.com/heroui-inc/heroui/commit/cc839cdd1fd54931bfba137e2f9b5e8007a7e47d)]:
  - @heroui/theme@2.1.1

## 2.0.12

### Patch Changes

- Updated dependencies [[`baec5502`](https://github.com/heroui-inc/heroui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e)]:
  - @heroui/theme@2.1.0
  - @heroui/react-utils@2.0.7

## 2.0.11

### Patch Changes

- Updated dependencies []:
  - @heroui/react-utils@2.0.6

## 2.0.10

### Patch Changes

- Updated dependencies [[`d0341020`](https://github.com/heroui-inc/heroui/commit/d0341020e6d865ad3f0d3646fa70a24de75a722b)]:
  - @heroui/theme@2.0.5

## 2.0.9

### Patch Changes

- Updated dependencies []:
  - @heroui/react-utils@2.0.5

## 2.0.8

### Patch Changes

- [#1359](https://github.com/heroui-inc/heroui/pull/1359) [`a30cec48`](https://github.com/heroui-inc/heroui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - \n

  - react-aria packages upgraded to the latest version
  - image storybooks fixed
  - other bug fixes..

- Updated dependencies [[`a30cec48`](https://github.com/heroui-inc/heroui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171)]:
  - @heroui/system@2.0.5

## 2.0.7

### Patch Changes

- Updated dependencies [[`710395f3`](https://github.com/heroui-inc/heroui/commit/710395f3a2ca44238332237a49e948c933abe63d)]:
  - @heroui/system@2.0.4

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @heroui/react-utils@2.0.4

## 2.0.5

### Patch Changes

- Updated dependencies []:
  - @heroui/react-utils@2.0.3

## 2.0.4

### Patch Changes

- [#1301](https://github.com/heroui-inc/heroui/pull/1301) [`d794225c`](https://github.com/heroui-inc/heroui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Plugin types adapted to work with latest version of postcss

- Updated dependencies [[`d794225c`](https://github.com/heroui-inc/heroui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7)]:
  - @heroui/theme@2.0.4

## 2.0.3

### Patch Changes

- [`e3e13a09`](https://github.com/heroui-inc/heroui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New package created to exports system RSC-compatible functions
  Component exports changed to named exports
- Updated dependencies [[`eefda8d6`](https://github.com/heroui-inc/heroui/commit/eefda8d6e2088526e0dbb2026d807b53d2a97782), [`e3e13a09`](https://github.com/heroui-inc/heroui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f)]:
  - @heroui/react-utils@2.0.2
  - @heroui/system@2.0.3
  - @heroui/theme@2.0.3
  - @heroui/use-is-mounted@2.0.2
  - @heroui/shared-utils@2.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [[`459ac5ed`](https://github.com/heroui-inc/heroui/commit/459ac5ed4537942517803ba14129226a791d6feb)]:
  - @heroui/theme@2.0.2
  - @heroui/system@2.0.2

## 2.0.1

### Patch Changes

- [`e940ec06`](https://github.com/heroui-inc/heroui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing NextUI v2.0

- [`e940ec06`](https://github.com/heroui-inc/heroui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing v2 - Readmes updated

- Updated dependencies [[`e940ec06`](https://github.com/heroui-inc/heroui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140), [`e940ec06`](https://github.com/heroui-inc/heroui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140)]:
  - @heroui/shared-utils@2.0.1
  - @heroui/react-utils@2.0.1
  - @heroui/use-is-mounted@2.0.1
  - @heroui/system@2.0.1
  - @heroui/theme@2.0.1
