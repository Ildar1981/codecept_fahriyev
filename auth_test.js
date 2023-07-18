
import { expect } from '@playwright/test'
import { auth } from './function/functions'
import {
    _baseURL,
    _loginAdmin,
    _loginAdminWrong,
    _loginUser1,
    _loginUser2,
    _loginUser3,
    _passwordAdmin,
    _passwordAdminWrong,
    _passwordUser1,
    _usernameUser1,
  } from './const'
  
Feature('auth');

Scenario('1.test something',  async ({ I, loginPage }) => {
    await auth(page, _baseURL, _loginUser1, _passwordUser1)
    await expect(page.locator(`.info-user div`)).toContainText(_usernameUser1)
});



Scenario('2.test something',  async ({ I, loginPage }) => {
    await auth(page, _baseURL, _loginAdmin, _passwordAdminWrong)
    await expect(page.getByRole(`alert`)).toContainText(`Ошибка авторизации`)
});



Scenario('3.test something',  async ({ I, loginPage }) => {
    await auth(page, _baseURL, _loginAdmin, _passwordAdmin)
    await expect(page.locator(`.info-user div`)).toContainText(_usernameAdmin)
});



Scenario('4.test something',  async ({ I, loginPage }) => {
    await auth(page, _baseURL, _loginAdminWrong, _passwordAdmin)
    await expect(page.getByRole(`alert`)).toContainText(`Ошибка авторизации`)
});



Scenario('5.test something',  async ({ I, loginPage }) => {
    await auth(page, _baseURL, _loginAdminWrong, _passwordAdminWrong)
    await expect(page.getByRole(`alert`)).toContainText(`Ошибка авторизации`)
});