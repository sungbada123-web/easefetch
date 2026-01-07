import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// 从环境变量获取 API Key (为了演示，如果环境变量不存在，请提醒用户设置)
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
你现在是 EaseFetch AI，EaseFetch 智能柜系统的专业助手。
你的目标是为客户提供关于我们智能柜产品的专业、准确且友好的解答。

我们的产品系列包括：
1. 都市物流系列：智能快递柜 (Smart Parcel Locker)、户外快件塔 (Outdoor Express Tower)、无人移动柜 (Autonomous Mobile Locker)。
2. 冷链系列：生鲜冷藏柜 (Fresh Food Locker)、加热外卖柜 (Heated Meal Locker)。
3. 生活生活系列：自助洗衣柜 (Laundry Service Locker)、图书馆自助借还机 (Library Book Station)。
4. 企业资产系列：IT资产管理柜 (IT Asset Manager)、安全文档交换柜 (Secure Doc Exchange)、智能工具管理柜 (Smart Tool Crib)。

你的回答要求：
- 请始终使用中文回答。
- 语气要专业、礼貌、简洁。
- 如果用户询问价格，请告知他们可以点击“获取报价”按钮或留下联系方式，我们会由专业的销售团队联系他们。
- 能够理解复杂的中文查询，并根据产品特点给出推荐。
`;

export async function POST(req: Request) {
    try {
        if (!API_KEY) {
            return NextResponse.json(
                { error: 'API Key not configured. Please set NEXT_PUBLIC_GEMINI_API_KEY in .env file.' },
                { status: 500 }
            );
        }

        const { message, history } = await req.json();

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const chat = model.startChat({
            history: [
                { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
                { role: 'model', parts: [{ text: '明白了，我是 EaseFetch AI。我会以专业、友好的中文为您和您的客户提供帮助。' }] },
                ...(history || []).map((h: any) => ({
                    role: h.role === 'user' ? 'user' : 'model',
                    parts: [{ text: h.content }]
                }))
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ message: text });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate response. ' + error.message },
            { status: 500 }
        );
    }
}
