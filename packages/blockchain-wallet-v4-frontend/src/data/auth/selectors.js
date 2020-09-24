import { path } from 'ramda'

export const isAuthenticated = path(['auth', 'isAuthenticated'])
export const getRegistering = path(['auth', 'registering'])
export const getRemindGuid = path(['auth', 'remindGuid'])
export const getFirstLogin = path(['auth', 'firstLogin'])
export const getRestoring = path(['auth', 'restoring'])
export const getAuthType = path(['auth', 'auth_type'])
export const getReset2fa = path(['auth', 'reset_2fa'])
export const getSecureChannelLogin = path(['auth', 'secureChannelLogin'])
export const getLogin = path(['auth', 'login'])
export const getMobileLoginStarted = path(['auth', 'mobileLoginStarted'])
