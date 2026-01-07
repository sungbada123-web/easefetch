# EaseFetch AI Chatbot Upgrade Proposal

The current chatbot uses a basic simulation that fails to understand context or multi-language queries (like Chinese). To implement a professional, intelligent auto-reply system for **FREE**, I propose the following plan.

## 1. Technical Solution: Google Gemini 1.5 Flash (Free Tier)
Gemini 1.5 Flash is highly optimized for chat and offers a generous free tier:
-   **Cost:** $0 (Free Tier)
-   **Rate Limit:** 15 Requests Per Minute (RPM), 1,500 Requests Per Day (RPD).
-   **Capabilities:** Multilingual (Fluent in Chinese/English), Context-aware, extremely fast.

## 2. Implementation Steps

### A. API Key Setup
The user needs to obtain a free API key from [Google AI Studio](https://aistudio.google.com/).

### B. Backend Route (`/api/chat`)
We will create a secure Next.js Route Handler. This prevents exposing the API key to the browser.
-   **File:** `app/api/chat/route.ts`
-   **Logic:** Receives user messages, sends them to Gemini with a "System Prompt" containing EaseFetch product knowledge, and returns the response.

### C. System Prompt Engineering
The AI will be primed with a specific persona:
> "You are EaseFetch AI, a professional assistant for EaseFetch Smart Lockers. Your knowledge base includes Urban Logistics (Parcel lockers), Cold Chain (Refrigerated/Heated), Lifestyle (Laundry/Library), and Enterprise assets. If a user asks in Chinese, answer in Chinese. Be helpful, concise, and professional."

### D. Frontend Integration
Modify `app/components/FloatingContact.tsx` to:
1.  Send the `inputValue` to `/api/chat`.
2.  Wait for the response.
3.  Update the UI state with the real AI output.

## 3. Why this is the "Best Free Solution" ?
-   **No Infrastructure Cost:** Runs on Vercel (Hobby) and Google Gemini (Free).
-   **Smart Context:** Understands complex questions like *"生鲜品柜怎么卖?"* (How much for the fresh food locker?) which the current code ignores.
-   **Zero Maintenance:** No server management required.

---

## 4. Next Step: Build the API
If you agree with this plan, I can proceed to build the API route and connect the frontend.
