import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// DeepSeek API (OpenAI compatible)
const API_KEY = process.env.DEEPSEEK_API_KEY || '';

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: API_KEY,
});

const SYSTEM_PROMPT = `你是 EaseFetch（逸趣）的智能客服小助手。

【你的性格】
- 亲切友好，像朋友聊天一样自然
- 回答简短直接，不要长篇大论
- 每次回复控制在3-5句话以内
- 不要用markdown格式（不要用**加粗**或者列表符号）
- 不要一开始就自我介绍

【公司背景】
EaseFetch是全球领先的智能柜方案商，总部杭州。

【产品系列】
- 智能快递柜、外卖柜、生鲜冷链柜（物流类）
- RFID工具柜、IT设备柜、印章柜（工业类）
- 药品柜、耗材柜（医疗类）
- 换电柜、储能柜（能源类）

【核心优势】
- AI视觉识别：自动识别存入物品
- SKD全球交付：节省70%物流成本
- 99.9%在线率

【回答规则】
1. 用户问什么就答什么，不要扯太远
2. 问价格就说"留个联系方式，销售会联系您"
3. 不确定的就说"这个我帮您问一下专业同事"
4. 语气自然，像真人客服`;

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
            max_tokens: 200,  // 限制回复长度
            temperature: 0.7, // 更自然的语气
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
