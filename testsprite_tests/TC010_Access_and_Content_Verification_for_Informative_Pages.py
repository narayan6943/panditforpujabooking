import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Find navigation links or menu to access About page
        await page.mouse.wheel(0, 300)
        

        # -> Navigate directly to Contact page via URL
        await page.goto('http://localhost:3000/contact/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Click on Muhurat Calendar link in the navigation menu to verify its accessibility and content
        frame = context.pages[-1]
        # Click on Muhurat Calendar link in the navigation menu
        elem = frame.locator('xpath=html/body/div/main/header/nav/div/div/a[5]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to About page via direct URL to verify accessibility and content
        await page.goto('http://localhost:3000/about/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to FAQ page via direct URL to verify accessibility and content
        await page.goto('http://localhost:3000/faq/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to Testimonials page via direct URL to verify accessibility and content
        await page.goto('http://localhost:3000/testimonials/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Click on internal link 'Home' to verify navigation and functionality
        frame = context.pages[-1]
        # Click on 'Home' link in navigation menu to verify it navigates correctly
        elem = frame.locator('xpath=html/body/div/main/header/nav/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Verify functionality of next internal link 'Puja Services' by clicking it to confirm navigation
        frame = context.pages[-1]
        # Click on 'Puja Services' link in navigation menu to verify it navigates correctly
        elem = frame.locator('xpath=html/body/div/main/header/nav/div/div/a[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Verify functionality of next internal link 'Astrology' by clicking it to confirm navigation
        frame = context.pages[-1]
        # Click on 'Astrology' link in navigation menu to verify it navigates correctly
        elem = frame.locator('xpath=html/body/div/main/header/nav/div/div/a[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FAQ').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Testimonials').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Muhurat Calendar').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10,000+ families').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Certified Vedic pandits for Griha Pravesh, Satyanarayan, and all 16 Sanskars.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Authentic rituals with complete samagri.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Griha Pravesh').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Satyanarayan Puja').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marriage Puja').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View All Services →').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91-8446272142').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 Pandit For Puja Booking. All rights reserved.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    