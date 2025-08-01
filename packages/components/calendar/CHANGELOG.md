# @heroui/calendar

## 2.2.24

### Patch Changes

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

- Updated dependencies [[`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b)]:
  - @heroui/use-aria-button@2.2.18
  - @heroui/button@2.2.24
  - @heroui/framer-utils@2.1.20

## 2.2.23

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
  - @heroui/dom-animation@2.1.10
  - @heroui/framer-utils@2.1.19
  - @heroui/shared-icons@2.1.10
  - @heroui/shared-utils@2.1.10
  - @heroui/use-aria-button@2.2.17
  - @heroui/react-utils@2.1.12
  - @heroui/button@2.2.23

## 2.2.23-beta.3

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

- Updated dependencies [[`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32)]:
  - @heroui/dom-animation@2.1.10-beta.5
  - @heroui/framer-utils@2.1.19-beta.2
  - @heroui/shared-icons@2.1.10-beta.6
  - @heroui/shared-utils@2.1.10-beta.7
  - @heroui/use-aria-button@2.2.17-beta.2
  - @heroui/react-utils@2.1.12-beta.5
  - @heroui/button@2.2.23-beta.2

## 2.2.23-beta.2

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

- Updated dependencies [[`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8)]:
  - @heroui/dom-animation@2.1.10-beta.4
  - @heroui/framer-utils@2.1.19-beta.1
  - @heroui/shared-icons@2.1.10-beta.5
  - @heroui/shared-utils@2.1.10-beta.6
  - @heroui/use-aria-button@2.2.17-beta.1
  - @heroui/react-utils@2.1.12-beta.4
  - @heroui/button@2.2.23-beta.1

## 2.2.23-beta.1

### Patch Changes

- [#5151](https://github.com/heroui-inc/heroui/pull/5151) [`e3c2795`](https://github.com/heroui-inc/heroui/commit/e3c279514c289d1962dee9ef2055e3a88aa4f245) Thanks [@aakashahpl](https://github.com/aakashahpl)! - Replace rectangle intersection detection with center-point distance calculation to make the calendar picker more resilient when browser zoom is changed. The new approach finds the closest picker item to the highlight element's center, preventing mismatches between displayed and selected year / month. (#5117)

- Updated dependencies [[`a95feca`](https://github.com/heroui-inc/heroui/commit/a95feca4586ca0a61e13ad03c16fab112160a02b)]:
  - @heroui/shared-icons@2.1.10-beta.4
  - @heroui/button@2.2.23-beta.0

## 2.2.23-beta.0

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

- Updated dependencies [[`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0)]:
  - @heroui/dom-animation@2.1.10-beta.3
  - @heroui/shared-icons@2.1.10-beta.3
  - @heroui/shared-utils@2.1.10-beta.5
  - @heroui/use-aria-button@2.2.17-beta.0
  - @heroui/react-utils@2.1.12-beta.3
  - @heroui/button@2.2.23-beta.0
  - @heroui/system@2.4.19-beta.0
  - @heroui/framer-utils@2.1.19-beta.0

## 2.2.22

### Patch Changes

- [#5374](https://github.com/heroui-inc/heroui/pull/5374) [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed) Thanks [@wingkwong](https://github.com/wingkwong)! - remove `@interationalized/date` from system

- [#5382](https://github.com/heroui-inc/heroui/pull/5382) [`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5374](https://github.com/heroui-inc/heroui/pull/5374) [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed) Thanks [@wingkwong](https://github.com/wingkwong)! - bump system peer dependencies

- Updated dependencies [[`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf), [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed)]:
  - @heroui/use-aria-button@2.2.16
  - @heroui/button@2.2.22
  - @heroui/framer-utils@2.1.18

## 2.2.21

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - remove unused dependencies

- Updated dependencies [[`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56)]:
  - @heroui/use-aria-button@2.2.15
  - @heroui/button@2.2.21
  - @heroui/framer-utils@2.1.17
  - @heroui/shared-icons@2.1.9
  - @heroui/react-utils@2.1.11

## 2.2.20

### Patch Changes

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5287](https://github.com/heroui-inc/heroui/pull/5287) [`06fe3a3`](https://github.com/heroui-inc/heroui/commit/06fe3a3c4e7f2fdfb5fcbb2255c907280c892de9) Thanks [@wingkwong](https://github.com/wingkwong)! - bump framer-motion version

- Updated dependencies [[`8df9716`](https://github.com/heroui-inc/heroui/commit/8df9716dfa29926237682b73df59e8018843e9c0), [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88), [`06fe3a3`](https://github.com/heroui-inc/heroui/commit/06fe3a3c4e7f2fdfb5fcbb2255c907280c892de9)]:
  - @heroui/shared-icons@2.1.8
  - @heroui/use-aria-button@2.2.14
  - @heroui/button@2.2.20
  - @heroui/dom-animation@2.1.9
  - @heroui/framer-utils@2.1.16

## 2.2.19

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

- Updated dependencies [[`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf)]:
  - @heroui/button@2.2.19
  - @heroui/use-aria-button@2.2.13
  - @heroui/dom-animation@2.1.8
  - @heroui/framer-utils@2.1.15
  - @heroui/react-utils@2.1.10
  - @heroui/shared-icons@2.1.7
  - @heroui/shared-utils@2.1.9

## 2.2.18

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

- Updated dependencies [[`53295ca`](https://github.com/heroui-inc/heroui/commit/53295ca9dc7a1310485e1574fd28110b6cbf5ebd), [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e)]:
  - @heroui/button@2.2.18
  - @heroui/dom-animation@2.1.7
  - @heroui/shared-utils@2.1.8
  - @heroui/use-aria-button@2.2.12
  - @heroui/framer-utils@2.1.14
  - @heroui/react-utils@2.1.9

## 2.2.17

### Patch Changes

- [#5060](https://github.com/heroui-inc/heroui/pull/5060) [`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump

- Updated dependencies [[`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1), [`9247f74`](https://github.com/heroui-inc/heroui/commit/9247f7423334b8db4194f31488119efddc28961f)]:
  - @heroui/use-aria-button@2.2.11
  - @heroui/button@2.2.17
  - @heroui/framer-utils@2.1.13

## 2.2.16

### Patch Changes

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- Updated dependencies [[`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de)]:
  - @heroui/use-aria-button@2.2.10
  - @heroui/button@2.2.16
  - @heroui/framer-utils@2.1.12

## 2.2.15

### Patch Changes

- v2.7.4

- Updated dependencies []:
  - @heroui/button@2.2.15
  - @heroui/use-aria-button@2.2.9
  - @heroui/dom-animation@2.1.6
  - @heroui/framer-utils@2.1.11
  - @heroui/react-utils@2.1.8
  - @heroui/shared-icons@2.1.6
  - @heroui/shared-utils@2.1.7

## 2.2.14

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.2.14

## 2.2.13

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/dom-animation@2.1.5
  - @heroui/framer-utils@2.1.10
  - @heroui/shared-icons@2.1.5
  - @heroui/shared-utils@2.1.6
  - @heroui/use-aria-button@2.2.8
  - @heroui/react-utils@2.1.7
  - @heroui/button@2.2.13

## 2.2.12

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/button@2.2.12
  - @heroui/use-aria-button@2.2.7
  - @heroui/dom-animation@2.1.4
  - @heroui/framer-utils@2.1.9
  - @heroui/react-utils@2.1.6
  - @heroui/shared-icons@2.1.4
  - @heroui/shared-utils@2.1.5

## 2.2.11

### Patch Changes

- [#4852](https://github.com/heroui-inc/heroui/pull/4852) [`446dd0b`](https://github.com/heroui-inc/heroui/commit/446dd0bfdede990c672e7b24fd10ac99fa8d4686) Thanks [@wingkwong](https://github.com/wingkwong)! - add `firstDayOfWeek`

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
  - @heroui/button@2.2.11
  - @heroui/use-aria-button@2.2.6
  - @heroui/dom-animation@2.1.3
  - @heroui/framer-utils@2.1.8
  - @heroui/react-utils@2.1.5
  - @heroui/shared-icons@2.1.3
  - @heroui/shared-utils@2.1.4

## 2.2.10

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

- Updated dependencies [[`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e)]:
  - @heroui/dom-animation@2.1.2
  - @heroui/framer-utils@2.1.7
  - @heroui/shared-icons@2.1.2
  - @heroui/shared-utils@2.1.3
  - @heroui/use-aria-button@2.2.5
  - @heroui/react-utils@2.1.4
  - @heroui/button@2.2.10

## 2.2.9

### Patch Changes

- Updated dependencies [[`e7ff673`](https://github.com/heroui-inc/heroui/commit/e7ff6730d7e891f1e9e3ca232b1faaebc5aedef2)]:
  - @heroui/react-utils@2.1.3
  - @heroui/button@2.2.9
  - @heroui/framer-utils@2.1.6

## 2.2.8

### Patch Changes

- [#4428](https://github.com/heroui-inc/heroui/pull/4428) [`c0e3dab`](https://github.com/heroui-inc/heroui/commit/c0e3dab5e8104b4f9335892e850b26359d33b3e8) Thanks [@wingkwong](https://github.com/wingkwong)! - remove unnecessary fragment in calendar (#4358, #4068)

- Updated dependencies [[`77206bc`](https://github.com/heroui-inc/heroui/commit/77206bc62596894d038b9715e40b361fec286c10), [`5f388fc`](https://github.com/heroui-inc/heroui/commit/5f388fc68c7db7f852432e73386686d919d44d31)]:
  - @heroui/shared-utils@2.1.2
  - @heroui/button@2.2.8
  - @heroui/use-aria-button@2.2.4
  - @heroui/framer-utils@2.1.5
  - @heroui/react-utils@2.1.2

## 2.2.7

### Patch Changes

- Updated dependencies [[`78c0928`](https://github.com/heroui-inc/heroui/commit/78c09280e30113bd648057ad64ad6198d1e5d58f)]:
  - @heroui/use-aria-button@2.2.3
  - @heroui/button@2.2.7

## 2.2.6

### Patch Changes

- Updated dependencies [[`5598806`](https://github.com/heroui-inc/heroui/commit/5598806216166dc9fff36cafd9112412486b747f)]:
  - @heroui/button@2.2.6

## 2.2.5

### Patch Changes

- Updated dependencies [[`dfefdd6`](https://github.com/heroui-inc/heroui/commit/dfefdd6250eb81ae653e611a8dff12b2ae29a09c)]:
  - @heroui/button@2.2.5

## 2.2.4

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- Updated dependencies [[`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @heroui/use-aria-button@2.2.2
  - @heroui/button@2.2.4
  - @heroui/framer-utils@2.1.4

## 2.2.3

### Patch Changes

- [#4255](https://github.com/heroui-inc/heroui/pull/4255) [`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

- Updated dependencies [[`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050)]:
  - @heroui/button@2.2.3
  - @heroui/framer-utils@2.1.3

## 2.2.2

### Patch Changes

- [#4247](https://github.com/heroui-inc/heroui/pull/4247) [`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

- Updated dependencies [[`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0)]:
  - @heroui/button@2.2.2
  - @heroui/framer-utils@2.1.2

## 2.2.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @heroui/button@2.2.1
  - @heroui/use-aria-button@2.2.1
  - @heroui/dom-animation@2.1.1
  - @heroui/framer-utils@2.1.1
  - @heroui/react-utils@2.1.1
  - @heroui/shared-icons@2.1.1
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

- [#4207](https://github.com/heroui-inc/heroui/pull/4207) [`6bc616c`](https://github.com/heroui-inc/heroui/commit/6bc616caea948431d05eec33c1784e0560524e97) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix the "forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?" on next.js by changing the way we manage collection base components refs

- [#4226](https://github.com/heroui-inc/heroui/pull/4226) [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- Updated dependencies [[`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @heroui/use-aria-button@2.2.0
  - @heroui/button@2.2.0
  - @heroui/dom-animation@2.1.0
  - @heroui/framer-utils@2.1.0
  - @heroui/react-utils@2.1.0
  - @heroui/shared-icons@2.1.0
  - @heroui/shared-utils@2.1.0

## 2.1.0-beta.14

### Patch Changes

- Updated dependencies [[`004c4a4b3`](https://github.com/heroui-inc/heroui/commit/004c4a4b3e44477f148937b12bb542e4b27fd322)]:
  - @heroui/shared-icons@2.0.10-beta.8
  - @heroui/button@2.1.0-beta.10

## 2.1.0-beta.13

### Patch Changes

- Updated dependencies [[`17bf65799`](https://github.com/heroui-inc/heroui/commit/17bf65799c39c2ee44ea9c0b23aa80315b2a5083)]:
  - @heroui/button@2.1.0-beta.10
  - @heroui/framer-utils@2.0.26-beta.11

## 2.1.0-beta.12

### Patch Changes

- [`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @heroui/button@2.1.0-beta.9
  - @heroui/use-aria-button@2.1.0-beta.8
  - @heroui/dom-animation@2.0.1-beta.7
  - @heroui/framer-utils@2.0.26-beta.10
  - @heroui/react-utils@2.0.18-beta.8
  - @heroui/shared-icons@2.0.10-beta.7
  - @heroui/shared-utils@2.0.9-beta.8

## 2.1.0-beta.11

### Patch Changes

- [#3036](https://github.com/heroui-inc/heroui/pull/3036) [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

- Updated dependencies [[`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00)]:
  - @heroui/button@2.1.0-beta.8
  - @heroui/use-aria-button@2.1.0-beta.7
  - @heroui/framer-utils@2.0.26-beta.9

## 2.1.0-beta.10

### Patch Changes

- [#4140](https://github.com/heroui-inc/heroui/pull/4140) [`78a99b628`](https://github.com/heroui-inc/heroui/commit/78a99b628e3fde8808a0cce3c69059d727afd49b) Thanks [@wingkwong](https://github.com/wingkwong)! - add missing `framer-motion` in `peerDependencies`

- Updated dependencies []:
  - @heroui/button@2.1.0-beta.7

## 2.1.0-beta.9

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.1.0-beta.7
  - @heroui/framer-utils@2.0.26-beta.8

## 2.1.0-beta.8

### Patch Changes

- [#4092](https://github.com/heroui-inc/heroui/pull/4092) [`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @heroui/button@2.1.0-beta.7
  - @heroui/use-aria-button@2.1.0-beta.6
  - @heroui/dom-animation@2.0.1-beta.6
  - @heroui/framer-utils@2.0.26-beta.7
  - @heroui/react-utils@2.0.18-beta.7
  - @heroui/shared-icons@2.0.10-beta.6
  - @heroui/shared-utils@2.0.9-beta.7

## 2.1.0-beta.7

### Patch Changes

- [#4086](https://github.com/heroui-inc/heroui/pull/4086) [`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @heroui/button@2.1.0-beta.6
  - @heroui/use-aria-button@2.1.0-beta.5
  - @heroui/dom-animation@2.0.1-beta.5
  - @heroui/framer-utils@2.0.26-beta.6
  - @heroui/react-utils@2.0.18-beta.6
  - @heroui/shared-icons@2.0.10-beta.5
  - @heroui/shared-utils@2.0.9-beta.6

## 2.1.0-beta.6

### Patch Changes

- [#4083](https://github.com/heroui-inc/heroui/pull/4083) [`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @heroui/button@2.1.0-beta.5
  - @heroui/use-aria-button@2.1.0-beta.4
  - @heroui/dom-animation@2.0.1-beta.4
  - @heroui/framer-utils@2.0.26-beta.5
  - @heroui/react-utils@2.0.18-beta.5
  - @heroui/shared-icons@2.0.10-beta.4
  - @heroui/shared-utils@2.0.9-beta.5

## 2.1.0-beta.5

### Patch Changes

- Updated dependencies [[`0f55c491b`](https://github.com/heroui-inc/heroui/commit/0f55c491b73da8944f9b38f2ad7486d1b89f8b7a)]:
  - @heroui/shared-icons@2.0.10-beta.3
  - @heroui/button@2.1.0-beta.4

## 2.1.0-beta.4

### Patch Changes

- [#4039](https://github.com/heroui-inc/heroui/pull/4039) [`5339b2571`](https://github.com/heroui-inc/heroui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7) Thanks [@wingkwong](https://github.com/wingkwong)! - support inert value with boolean type for react 19 (#4038)

- Updated dependencies [[`5339b2571`](https://github.com/heroui-inc/heroui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @heroui/shared-utils@2.0.9-beta.4
  - @heroui/button@2.1.0-beta.4
  - @heroui/framer-utils@2.0.26-beta.4
  - @heroui/react-utils@2.0.18-beta.4

## 2.1.0-beta.3

### Patch Changes

- [#4010](https://github.com/heroui-inc/heroui/pull/4010) [`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @heroui/button@2.1.0-beta.3
  - @heroui/use-aria-button@2.1.0-beta.3
  - @heroui/dom-animation@2.0.1-beta.3
  - @heroui/framer-utils@2.0.26-beta.3
  - @heroui/react-utils@2.0.18-beta.3
  - @heroui/shared-icons@2.0.10-beta.2
  - @heroui/shared-utils@2.0.9-beta.3

## 2.1.0-beta.2

### Patch Changes

- [#4008](https://github.com/heroui-inc/heroui/pull/4008) [`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @heroui/button@2.1.0-beta.2
  - @heroui/use-aria-button@2.1.0-beta.2
  - @heroui/dom-animation@2.0.1-beta.2
  - @heroui/framer-utils@2.0.26-beta.2
  - @heroui/react-utils@2.0.18-beta.2
  - @heroui/shared-icons@2.0.10-beta.1
  - @heroui/shared-utils@2.0.9-beta.2

## 2.1.0-beta.1

### Patch Changes

- [#3990](https://github.com/heroui-inc/heroui/pull/3990) [`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @heroui/button@2.1.0-beta.1
  - @heroui/use-aria-button@2.1.0-beta.1
  - @heroui/dom-animation@2.0.1-beta.1
  - @heroui/framer-utils@2.0.26-beta.1
  - @heroui/react-utils@2.0.18-beta.1
  - @heroui/shared-icons@2.0.10-beta.0
  - @heroui/shared-utils@2.0.9-beta.1

## 2.1.0-beta.0

### Minor Changes

- [#3732](https://github.com/heroui-inc/heroui/pull/3732) [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- [#3302](https://github.com/heroui-inc/heroui/pull/3302) [`a4a1d8fb6`](https://github.com/heroui-inc/heroui/commit/a4a1d8fb69dd7f496a179a66af072f72aae0ec17) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Add month and year picker to DateRangePicker and RangeCalendar (#3089, #3090)

- [#3523](https://github.com/heroui-inc/heroui/pull/3523) [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - replaced lodash with native approaches

- [#3523](https://github.com/heroui-inc/heroui/pull/3523) [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - framer motion optimization (#3340)

- [#3523](https://github.com/heroui-inc/heroui/pull/3523) [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - update `framer-motion` versions

- Updated dependencies [[`0cf91395c`](https://github.com/heroui-inc/heroui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/heroui-inc/heroui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/heroui-inc/heroui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/heroui-inc/heroui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/heroui-inc/heroui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/heroui-inc/heroui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/heroui-inc/heroui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/heroui-inc/heroui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/heroui-inc/heroui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/heroui-inc/heroui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/heroui-inc/heroui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/heroui-inc/heroui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @heroui/theme@2.3.0-beta.0
  - @heroui/button@2.1.0-beta.0
  - @heroui/system@2.3.0-beta.0
  - @heroui/use-aria-button@2.1.0-beta.0
  - @heroui/shared-utils@2.0.9-beta.0
  - @heroui/dom-animation@2.0.1-beta.0
  - @heroui/framer-utils@2.0.26-beta.0
  - @heroui/react-utils@2.0.18-beta.0

## 2.0.12

### Patch Changes

- [#3656](https://github.com/heroui-inc/heroui/pull/3656) [`55c92981e`](https://github.com/heroui-inc/heroui/commit/55c92981e009b1721e8288341402feb1ebec08f3) Thanks [@ameybh](https://github.com/ameybh)! - fixed arrow keys order when html has dir="rtl" (#3641, #3642)

- Updated dependencies [[`f36df4362`](https://github.com/heroui-inc/heroui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @heroui/shared-utils@2.0.8
  - @heroui/button@2.0.38
  - @heroui/framer-utils@2.0.25
  - @heroui/react-utils@2.0.17

## 2.0.11

### Patch Changes

- [#3512](https://github.com/heroui-inc/heroui/pull/3512) [`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @heroui/button@2.0.37
  - @heroui/use-aria-button@2.0.10
  - @heroui/framer-utils@2.0.24
  - @heroui/react-utils@2.0.16
  - @heroui/shared-icons@2.0.9
  - @heroui/shared-utils@2.0.7

## 2.0.10

### Patch Changes

- [#3505](https://github.com/heroui-inc/heroui/pull/3505) [`1fdbf2ad2`](https://github.com/heroui-inc/heroui/commit/1fdbf2ad2020d91f257029e6a3f81406d5da109c) Thanks [@abhinandan-verma](https://github.com/abhinandan-verma)! - Fixed the calendarContent width as per visible month

- Updated dependencies []:
  - @heroui/button@2.0.36

## 2.0.9

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.0.36
  - @heroui/framer-utils@2.0.23

## 2.0.8

### Patch Changes

- [#3358](https://github.com/heroui-inc/heroui/pull/3358) [`fd4b7200d`](https://github.com/heroui-inc/heroui/commit/fd4b7200dd26eae53ce50e06610b34388e3fdc08) Thanks [@wingkwong](https://github.com/wingkwong)! - disable button picker in calendar if `isDisabled` is true (#3357)

- [#3331](https://github.com/heroui-inc/heroui/pull/3331) [`f5d94f96e`](https://github.com/heroui-inc/heroui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed incorrect year in `showMonthAndYearPickers` with different locales

- [#3088](https://github.com/heroui-inc/heroui/pull/3088) [`134f37184`](https://github.com/heroui-inc/heroui/commit/134f371843e90f23c3f1816e8b9df328e21d6827) Thanks [@KumJungMin](https://github.com/KumJungMin)! - fix hours, month clear issue in `showMonthAndYearPickers` mode (#3072).

- [#3416](https://github.com/heroui-inc/heroui/pull/3416) [`5652e7bdd`](https://github.com/heroui-inc/heroui/commit/5652e7bddc498c7f7420a68c58f207ba4cbe3933) Thanks [@abhinandan-verma](https://github.com/abhinandan-verma)! - Fixed calendar clipping issue on zoom (#2978)

- Updated dependencies [[`f5d94f96e`](https://github.com/heroui-inc/heroui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49)]:
  - @heroui/shared-utils@2.0.6
  - @heroui/button@2.0.35
  - @heroui/framer-utils@2.0.22
  - @heroui/react-utils@2.0.15

## 2.0.7

### Patch Changes

- [#3240](https://github.com/heroui-inc/heroui/pull/3240) [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- Updated dependencies [[`3500147d7`](https://github.com/heroui-inc/heroui/commit/3500147d7fbe53bc01ae24749fdeaf87c37c0d12), [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`b9bb06ff3`](https://github.com/heroui-inc/heroui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @heroui/shared-icons@2.0.8
  - @heroui/button@2.0.34
  - @heroui/use-aria-button@2.0.9
  - @heroui/react-utils@2.0.14
  - @heroui/framer-utils@2.0.21

## 2.0.6

### Patch Changes

- [#3119](https://github.com/heroui-inc/heroui/pull/3119) [`685995a12`](https://github.com/heroui-inc/heroui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

- Updated dependencies [[`685995a12`](https://github.com/heroui-inc/heroui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a)]:
  - @heroui/button@2.0.33
  - @heroui/use-aria-button@2.0.8
  - @heroui/framer-utils@2.0.20

## 2.0.5

### Patch Changes

- [#2889](https://github.com/heroui-inc/heroui/pull/2889) [`aba1716ed`](https://github.com/heroui-inc/heroui/commit/aba1716edc2a85c94e6baeb4acc481f67589d002) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Update React Aria packages

- [#3054](https://github.com/heroui-inc/heroui/pull/3054) [`bf68c91b9`](https://github.com/heroui-inc/heroui/commit/bf68c91b9a5be2014830859b0be2127d657ba90f) Thanks [@ShrinidhiUpadhyaya](https://github.com/ShrinidhiUpadhyaya)! - revise the inert attribute in `CalendarMonth` and `CalendarPicker`

- [#2906](https://github.com/heroui-inc/heroui/pull/2906) [`c83ff382b`](https://github.com/heroui-inc/heroui/commit/c83ff382b9e5deaa08ed7e64eee484cc4904704d) Thanks [@ShrinidhiUpadhyaya](https://github.com/ShrinidhiUpadhyaya)! - Fixed hiding of unavailable dates in RangeCalendar (#2890)

- [#2929](https://github.com/heroui-inc/heroui/pull/2929) [`422770cc6`](https://github.com/heroui-inc/heroui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

- [#3014](https://github.com/heroui-inc/heroui/pull/3014) [`20ba81948`](https://github.com/heroui-inc/heroui/commit/20ba81948d86ccc7ea4269cceb06e04899903b0e) Thanks [@winchesHe](https://github.com/winchesHe)! - add the correct peerDep version

- Updated dependencies [[`422770cc6`](https://github.com/heroui-inc/heroui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2)]:
  - @heroui/button@2.0.32
  - @heroui/framer-utils@2.0.19

## 2.0.4

### Patch Changes

- [#2861](https://github.com/heroui-inc/heroui/pull/2861) [`e9fef9bd9`](https://github.com/heroui-inc/heroui/commit/e9fef9bd922ae1efdf3f796cfe88a579bf693c1d) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #2820 #2857 Maximum update depth exceeded on Calendar & RangeCalendar when hovering the dates.

- Updated dependencies []:
  - @heroui/button@2.0.31

## 2.0.3

### Patch Changes

- Updated dependencies [[`eccc2f2f3`](https://github.com/heroui-inc/heroui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @heroui/framer-utils@2.0.18
  - @heroui/react-utils@2.0.13
  - @heroui/button@2.0.30

## 2.0.2

### Patch Changes

- [#2744](https://github.com/heroui-inc/heroui/pull/2744) [`158c2aa00`](https://github.com/heroui-inc/heroui/commit/158c2aa004f0080449321f84b0efd37762e8adc0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Refactor calendar cell tab index, add calendar default width

- Updated dependencies []:
  - @heroui/button@2.0.29
  - @heroui/framer-utils@2.0.17
  - @heroui/react-utils@2.0.12

## 2.0.1

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
  - @heroui/button@2.0.28
  - @heroui/use-aria-button@2.0.7
  - @heroui/framer-utils@2.0.16
  - @heroui/react-utils@2.0.11
  - @heroui/shared-icons@2.0.7
  - @heroui/shared-utils@2.0.5
