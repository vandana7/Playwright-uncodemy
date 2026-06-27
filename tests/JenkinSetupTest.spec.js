import { test, expect } from '@playwright/test';

test('open home page',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})

