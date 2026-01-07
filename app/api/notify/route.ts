import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// 接收线索的邮箱列表
const NOTIFICATION_EMAILS = ['sungbada123@gmail.com', '642809387@qq.com'];

export async function POST(req: Request) {
    try {
        const { contact, chatHistory, detectedInfo } = await req.json();

        // 格式化聊天记录
        const formattedChat = chatHistory
            .map((msg: { role: string; content: string }) =>
                `${msg.role === 'user' ? '👤 客户' : '🤖 AI'}: ${msg.content}`
            )
            .join('\n\n');

        // 构建邮件内容
        const emailContent = `
🎯 新线索通知！

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 检测到的联系方式: ${contact || detectedInfo || '未知'}
⏰ 时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 完整聊天记录:

${formattedChat}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
此邮件由 EaseFetch AI 客服系统自动发送
        `.trim();

        // 发送邮件
        const { data, error } = await resend.emails.send({
            from: 'EaseFetch AI <onboarding@resend.dev>',
            to: NOTIFICATION_EMAILS,
            subject: `🎯 新线索: ${contact || detectedInfo || '客户留言'}`,
            text: emailContent,
        });

        if (error) {
            console.error('Email send error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error: any) {
        console.error('Lead notification error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
