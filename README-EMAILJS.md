# Configuração do EmailJS para o Formulário de Contato

Este documento explica como configurar o EmailJS para permitir o envio de e-mails a partir do formulário de contato do site.

## Erro 400 - Como Resolver

Se você estiver vendo um erro 400 ao tentar enviar o formulário, isso geralmente significa que:

1. As variáveis de ambiente não foram configuradas corretamente
2. O template do EmailJS não está configurado para aceitar os parâmetros enviados
3. Há um problema com a autenticação do EmailJS

Siga os passos abaixo para resolver este problema.

## Passos para Configuração

1. **Crie uma conta no EmailJS**
   - Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita

2. **Configure um serviço de e-mail**
   - No painel do EmailJS, vá para "Email Services" e adicione um novo serviço
   - Você pode escolher entre Gmail, Outlook, ou outros provedores de e-mail
   - Siga as instruções para conectar sua conta de e-mail

3. **Crie um template de e-mail**
   - No painel do EmailJS, vá para "Email Templates" e crie um novo template
   - Use as seguintes variáveis no seu template:
     - `{{to_name}}`: Nome do destinatário (escritório)
     - `{{reply_to}}`: E-mail para resposta (e-mail do cliente)
     - `{{from_name}}`: Nome do cliente
     - `{{from_email}}`: E-mail do cliente
     - `{{from_phone}}`: Telefone do cliente
     - `{{subject}}`: Assunto da mensagem
     - `{{message}}`: Conteúdo da mensagem
     - `{{dia}}`: Dia do agendamento (opcional)
     - `{{horario}}`: Horário do agendamento (opcional)
     - `{{contador}}`: Nome do contador responsável (opcional)
   - Personalize o template conforme necessário
   - Um modelo de template para escritório de contabilidade está disponível no arquivo `template-email-contabilidade.md`
   - **IMPORTANTE**: O EmailJS espera um campo `to_name` para o destinatário, não `to_email`. O e-mail do destinatário é configurado no serviço de e-mail do EmailJS.

4. **Obtenha suas chaves e IDs**
   - No painel do EmailJS, vá para "Integration" para obter sua Public Key
   - Anote o Service ID do serviço que você criou
   - Anote o Template ID do template que você criou

5. **Configure o arquivo .env**
   - Copie o arquivo `.env.example` para `.env` na raiz do projeto
   - Substitua os valores das seguintes variáveis com suas informações reais do EmailJS:
     ```
     VITE_EMAILJS_PUBLIC_KEY=sua_chave_publica
     VITE_EMAILJS_SERVICE_ID=seu_service_id
     VITE_EMAILJS_TEMPLATE_ID=seu_template_id
     ```
   - **IMPORTANTE**: Certifique-se de que os valores não estão entre aspas e não contêm espaços extras

## Template para Escritório de Contabilidade

Um modelo de template específico para escritório de contabilidade foi criado e está disponível no arquivo `template-email-contabilidade.md`. Este template inclui:

- Confirmação de agendamento de consulta contábil
- Instruções para o cliente trazer documentos necessários
- Procedimentos básicos para uma consulta produtiva

Para usar este template:
1. Copie o conteúdo do arquivo `template-email-contabilidade.md`
2. Cole no seu template do EmailJS
3. Personalize conforme necessário

## Testando o Envio de E-mails

1. Inicie o servidor de desenvolvimento com `npm run dev`
2. Acesse o site e vá para a seção de contato
3. Preencha o formulário e clique em "Enviar Mensagem"
4. Verifique se o e-mail foi recebido no endereço configurado (dorivaldo@procontabil.net.br)

## Solução de Problemas

Se os e-mails não estiverem sendo enviados:

1. **Erro 400 (Bad Request)**:
   - Verifique se as chaves e IDs no arquivo `.env` estão corretos e não são os valores padrão
   - Certifique-se de que o template do EmailJS contém as variáveis corretas: `from_name`, `from_email`, `from_phone`, `subject`, `message`
   - Verifique se o serviço de e-mail está ativo no painel do EmailJS

2. **Erros no Console**:
   - Abra as ferramentas de desenvolvedor do navegador (F12) e verifique o console para mensagens de erro específicas
   - Instale o React DevTools para uma melhor experiência de depuração: https://react.dev/link/react-devtools

3. **Problemas de Autenticação**:
   - Verifique se a chave pública está correta
   - Certifique-se de que sua conta do EmailJS está ativa e não expirou

4. **Problemas de Template**:
   - Verifique se o template está configurado corretamente no painel do EmailJS
   - Certifique-se de que os nomes das variáveis no template correspondem aos nomes usados no código

## Limites da Conta Gratuita

A conta gratuita do EmailJS permite enviar até 200 e-mails por mês. Se você precisar de mais, considere fazer upgrade para um plano pago.