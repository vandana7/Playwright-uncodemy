import { test, expect } from '@playwright/test';

test('new url',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})

