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
        # -> Navigate to a puja service page using a valid puja name in the URL to verify dynamic content loading.
        frame = context.pages[-1]
        # Click on 'Puja Services' link to navigate to puja services listing or page
        elem = frame.locator('xpath=html/body/div/main/header/nav/div/div/a[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to a specific puja service page using a valid puja name parameter in the URL to verify dynamic content loading.
        await page.goto('http://localhost:3000/puja-services/ganesh-puja', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Check if other puja service URLs with different puja names load correctly or if the issue is consistent across all dynamic puja service pages.
        await page.goto('http://localhost:3000/puja-services/lakshmi-puja', timeout=10000)
        await asyncio.sleep(3)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Lakshmi Puja in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Lakshmi Puja is performed to invoke the blessings of Goddess Lakshmi, the deity of wealth, prosperity, and fortune. This powerful puja helps attract financial stability, remove obstacles to success, and bring abundance into your life. Our experienced pandits perform authentic Lakshmi puja following traditional Vedic methods.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ganpati Pujan').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kalash Sthapana').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Lakshmi Yantra Pujan').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Lakshmi Mantra Chanting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Havan with special samagri').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Aarti and Prasad').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Attracts wealth and financial prosperity').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Removes financial obstacles and debts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Brings success in business and career').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ensures steady income and savings').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creates positive financial energy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=₹2,000 - ₹4,500').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1.5-2.5 hours').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Individuals facing financial difficulties, business owners, professionals seeking career growth, or anyone wanting to attract prosperity.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Most effective on Fridays, during Diwali, or on auspicious dates. Can be performed any day with proper muhurat.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Can be performed monthly, during festivals, or whenever financial blessings are needed. Regular puja strengthens connection with the deity.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Removes financial obstacles, attracts wealth, and ensures prosperity. Especially beneficial for business owners and professionals.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Satyanarayan Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Santoshi Mata Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Somvar Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mangala Gauri Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Navratri Durga Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Karwa Chauth Vrat Udyapan in Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91-8446272142').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by 10,000+ families. Certified Vedic pandits. Authentic rituals with complete samagri.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Griha Pravesh Puja').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Satyanarayan Puja').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marriage Puja').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Pune').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mumbai').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Delhi').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bangalore').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    