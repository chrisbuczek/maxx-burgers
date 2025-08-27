'use client'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Badge } from './Badge'
// Button theme types
export type ButtonTheme =
  | 'primary'
  | 'primarytest'
  | 'secondary'
  | 'premium'
  | 'special'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'

// Button accenttypes
export type ButtonAccent =
  | 'primary'
  | 'secondary'
  | 'premium'
  | 'special'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'

// Button style types
export type ButtonStyle = 'solid' | 'muted' | 'subtle' | 'outline' | 'ghost'

// Base props type without theme-specific properties
type IconButtonPropsCommon = {
  children: React.ReactNode
  variant: 'square' | 'rounded' | 'circle'
  style: ButtonStyle
  className?: string
  disabled?: boolean
  onClick?: () => void
}

// Props for non-neutral themes (accent optional)
type IconButtonPropsWithOtherTheme = IconButtonPropsCommon & {
  theme: ButtonTheme
  accent?: ButtonAccent
}

// Combined theme-specific props
type IconButtonPropsWithTheme = IconButtonPropsWithOtherTheme

// Props for large size buttons
type IconButtonPropsWithSizeXL = IconButtonPropsWithTheme & {
  size: 'XL'
  badge?: string | number
}
type IconButtonPropsWithSizeL = IconButtonPropsWithTheme & {
  size: 'L'
  badge?: string | number
}
type IconButtonPropsWithSizeM = IconButtonPropsWithTheme & {
  size: 'M'
  badge?: string | number
}
// Props for medium size buttons
type IconButtonPropsWithSizeSM = IconButtonPropsWithTheme & {
  size: 'SM'
  badge?: never
}
type IconButtonPropsWithSizeXS = IconButtonPropsWithTheme & {
  size: 'XS'
  badge?: never
}
// Combined props type
export type IconButtonProps =
  | IconButtonPropsWithSizeL
  | IconButtonPropsWithSizeXL
  | IconButtonPropsWithSizeM
  | IconButtonPropsWithSizeSM
  | IconButtonPropsWithSizeXS

// Style dictionary definitions
// Base classes shared by all icon buttons
const BUTTON_BASE_CLASSES =
  'relative flex items-center justify-center transition-all duration-200 cursor-pointer ease-out'

// Size classes
const SIZE_CLASSES = {
  XL: 'w-14 h-14',
  L: 'w-12 h-12',
  M: 'w-10 h-10',
  SM: 'w-8 h-8',
  XS: 'w-6 h-6',
}

// Variant classes
const VARIANT_CLASSES = {
  square: 'rounded-none',
  rounded: 'rounded-[4px]',
  circle: 'rounded-full',
}

// Theme-specific style configurations

const themeStyleConfig = {
  // Default theme styling patterns
  default: {
    solid: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-${theme} text-${accent || theme}-subtle hover:bg-${theme}-tint hover:text-white , // active:bg-${theme} focus:bg-${theme}-tint
    muted: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-${theme} text-${accent || theme}-muted hover:text-${accent || theme}-minimal hover:bg-${theme}-lighter , // active:bg-${theme}-tint active:text-${accent || theme}-lighter focus:bg-${theme}-tint focus:text-${accent || theme}-lighter
    subtle: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-${theme}-minimal text-${accent || theme}-darker hover:bg-${theme}-subtle , // active:bg-${theme}-light focus:bg-${theme}-light
    outline: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-white text-${accent || theme} border-${theme}-darker border-[1px] hover:bg-${theme}-subtle,
    ghost: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-white text-${accent || theme} hover:bg-${theme}-subtle ,
  },

  // Premium theme has special styling
  premium: {
    solid: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-premium text-${accent ? `${accent}-subtle : 'premium-subtle'} hover:bg-premium-lighter hover:text-white`,
    muted: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-premium text-${accent ? `${accent}-muted : 'premium-muted'} hover:bg-premium-lighter hover:text-premium-subtle`,
    subtle: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-premium-minimal text-${accent ? `${accent}-darker : 'premium-darker'} hover:bg-premium-subtle`,
    outline: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-transparent text-${accent || 'premium'} border-premium-darker border-[1px] hover:bg-premium-subtle,
    ghost: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-transparent text-${accent || 'premium'} hover:bg-premium-subtle,
  },

  // Neutral theme has its own styling
  neutral: {
    solid: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-colorNeutral ${accent ? text-${accent}-subtle : text-colorNeutral-subtle} hover:bg-colorNeutral-lighter hover:text-white,
    muted: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-colorNeutral text-${accent ? `${accent}-muted : colorNeutral-muted`} hover:bg-colorNeutral-lighter hover:text-colorNeutral-subtle,
    subtle: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-colorNeutral-minimal text-${accent ? `${accent}-darker : colorNeutral-darker`} hover:bg-colorNeutral-subtle,
    outline: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-transparent text-${accent || colorNeutral} border-colorNeutral-darker border-[1px] hover:bg-colorNeutral-subtle,
    ghost: (theme: ButtonTheme, accent?: ButtonAccent) =>
      bg-transparent ${accent ? text-${accent} : text-colorNeutral} hover:bg-colorNeutral-subtle,
  },
}

// Function to get style classes based on theme and style
const getStyleClasses = (
  style: ButtonStyle,
  theme: ButtonTheme,
  accent?: ButtonAccent,
): string => {
  // Check if we have a special configuration for this theme
  if (theme in themeStyleConfig) {
    return themeStyleConfig[theme as keyof typeof themeStyleConfig][style](
      theme,
      accent,
    )
  }

  return themeStyleConfig.default[style](theme, accent)
}

export const IconButton = ({
  children,
  theme,
  size,
  variant,
  badge,
  accent,
  style,
  className,
  disabled = false,

  onClick,
}: IconButtonProps) => {
  const buttonClasses = classNames(
    BUTTON_BASE_CLASSES,
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    getStyleClasses(style, theme, accent),
    className,
  )

  // Handle click events
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className={
        disabled ? !pointer-events-none ${buttonClasses}  : buttonClasses
      }
      role="button"
      onClick={handleClick}
    >
      {children}
      {(size === 'L' || size === 'XL' || size === 'M') &&
        badge !== undefined && (
          <Badge
            rounded={true}
            text={badge}
            extraClass={`absolute  ${size === 'XL' && 'top-[8px] right-[8px]'} ${size === 'L' && 'top-[6px] right-[6px]'} ${size === 'M' && 'top-[2px] right-[2px]  '}`}
          />
        )}
    </div>
  )
}