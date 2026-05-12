'use client'

import type { ReactNode } from 'react'

type FormSheetProps = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

type FormGridProps = {
  children: ReactNode
  columns?: 1 | 2
  className?: string
}

type FormFieldProps = {
  label: string
  htmlFor?: string
  required?: boolean
  hint?: string
  children: ReactNode
  className?: string
}

type FormActionsProps = {
  children: ReactNode
  className?: string
}

export function FormSheet({ title, description, children, className = '' }: FormSheetProps) {
  return (
    <div className={`form-sheet dark-container glass-card rounded-2xl p-6 md:p-8 lg:p-10 ${className}`}>
      <div className="form-sheet-header">
        <h3 className="text-xl md:text-2xl font-semibold text-gold-metallic">{title}</h3>
        {description ? <p className="form-sheet-description">{description}</p> : null}
      </div>
      {children}
    </div>
  )
}

export function FormGrid({ children, columns = 2, className = '' }: FormGridProps) {
  return (
    <div className={`form-grid ${columns === 2 ? 'form-grid-two' : 'form-grid-one'} ${className}`}>
      {children}
    </div>
  )
}

export function FormField({ label, htmlFor, required, hint, children, className = '' }: FormFieldProps) {
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={htmlFor} className="form-label">
        {label}
        {required ? <span className="form-required"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="form-hint">{hint}</p> : null}
    </div>
  )
}

export function FormActions({ children, className = '' }: FormActionsProps) {
  return <div className={`form-actions ${className}`}>{children}</div>
}
