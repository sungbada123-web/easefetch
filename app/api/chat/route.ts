import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// DeepSeek API (OpenAI compatible)
const API_KEY = process.env.DEEPSEEK_API_KEY || '';

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: API_KEY,
});

const SYSTEM_PROMPT = `
你现在是 EaseFetch AI，EaseFetch 智能柜系统的专业助手。
你的目标是为客户提供关于我们智能柜产品的专业、准确且友好的解答。

我们的产品系列包括：
1. 都市物流系列：智能快递柜 (Smart Parcel Locker)、户外快件塔 (Outdoor Express Tower)、无人移动柜 (Autonomous Mobile Locker)。
2. 冷链系列：生鲜冷藏柜 (Fresh Food Locker)、加热外卖柜 (Heated Meal Locker)。
3. 生活系列：自助洗衣柜 (Laundry Service Locker)、图书馆自助借还机 (Library Book Station)。
4. 企业资产系列：IT资产管理柜 (IT Asset Manager)、安全文档交换柜 (Secure Doc Exchange)、智能工具管理柜 (Smart Tool Crib)。

你的回答要求：
- 请始终使用中文回答。
- 语气要专业、礼貌、简洁。
- 如果用户询问价格，请告知他们可以点击"获取报价"按钮或留下联系方式，我们会由专业的销售团队联系他们。
- 能够理解复杂的中文查询，并根据产品特点给出推荐。
`;

export async function POST(req: Request) {
    try {
        if (!API_KEY) {
            return NextResponse.json(
                { error: 'API Key not configured. Please set DEEPSEEK_API_KEY in .env file.' },
                { status: 500 }
            );
        }

        const { message, history } = await req.json();

        const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...(history || []).map((h: { role: string; content: string }) => ({
                role: h.role as 'user' | 'assistant',
                content: h.content
            })),
            { role: 'user', content: message }
        ];

        const completion = await openai.chat.completions.create({
            model: 'deepseek-chat',
            messages: messages,
            stream: false,
        });

        const text = completion.choices[0]?.message?.content || '抱歉，我无法生成回复。';

        return NextResponse.json({ message: text });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to generate response.',
                errorMessage: error.message,
                apiKeyPresent: !!API_KEY
            },
            { status: 500 }
        );
    }
}
