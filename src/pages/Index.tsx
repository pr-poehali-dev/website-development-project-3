import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Landing Page",
      description: "Продающие лендинги с высокой конверсией",
      prices: {
        start: "35 000 ₽",
        basic: "52 000 ₽", 
        premium: "78 000 ₽"
      }
    },
    {
      title: "Сайт-витрина",
      description: "Презентация услуг и компании",
      prices: {
        start: "18 000 ₽",
        basic: "32 000 ₽",
        premium: "50 000 ₽"
      }
    },
    {
      title: "Информационный сайт",
      description: "Многостраничные корпоративные сайты",
      prices: {
        start: "34 000 ₽",
        basic: "78 000 ₽",
        premium: "92 000 ₽"
      }
    },
    {
      title: "Интернет-магазин",
      description: "Полнофункциональные e-commerce решения",
      prices: {
        start: "60 000 ₽",
        basic: "92 000 ₽",
        premium: "120 000 ₽"
      }
    }
  ];

  const additionalServices = [
    { name: "Настройка хостинга и установка сайта", price: "1 000 ₽" },
    { name: "Настройка домена", price: "1 000 ₽" },
    { name: "Техническое обслуживание", price: "25 000 ₽/мес" },
    { name: "SEO-оптимизация", price: "от 15 000 ₽" },
    { name: "Интеграция сторонних сервисов", price: "5 000 ₽" }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-sans text-foreground">SULEYMANOV</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              <Button size="sm">Обсудить проект</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">WordPress Developer</Badge>
          <h2 className="text-5xl md:text-6xl font-bold font-sans mb-6 text-foreground leading-tight">
            Профессиональная разработка сайтов под ключ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстрые, безопасные и удобные сайты на WordPress. 3 года опыта, 20+ реализованных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (995) 070-64-97
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-accent/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold font-sans mb-6 text-foreground">О разработчике</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                WordPress-разработчик с 3-летним опытом. Реализовал 20+ проектов: лендинги, сайты-витрины, интернет-магазины. 
                Делаю удобные и современные сайты под ключ.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline">WordPress</Badge>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">SEO</Badge>
                <Badge variant="outline">E-commerce</Badge>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">качество</div>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4 text-foreground">Услуги и тарифы</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Создаю сайты под ключ с учетом ваших целей и бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Старт</span>
                      <span className="font-semibold">{service.prices.start}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Базовый</span>
                      <span className="font-semibold">{service.prices.basic}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Премиум</span>
                      <span className="font-semibold text-primary">{service.prices.premium}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-sans">Дополнительные услуги</CardTitle>
              <CardDescription>Расширенные возможности для вашего проекта</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <span className="text-foreground">{service.name}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-r from-white to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4 text-foreground">Портфолио</h3>
            <p className="text-muted-foreground text-lg">Примеры выполненных проектов</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-sans">FamTravel43.ru</CardTitle>
                    <CardDescription className="text-lg">Сайт-витрина для турагентства</CardDescription>
                  </div>
                  <Badge className="w-fit">Сайт-витрина</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Описание проекта:</h4>
                    <p className="text-muted-foreground mb-4">
                      Подбор семейных туров с каталогом, фильтрами и формой заявки. 
                      Адаптивный дизайн, интеграция мессенджеров, быстрая загрузка.
                    </p>
                    
                    <h4 className="font-semibold mb-3 text-foreground">Функционал:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline">Каталог туров</Badge>
                      <Badge variant="outline">Фильтры</Badge>
                      <Badge variant="outline">Форма заявки</Badge>
                      <Badge variant="outline">Адаптивный дизайн</Badge>
                      <Badge variant="outline">WhatsApp</Badge>
                      <Badge variant="outline">Telegram</Badge>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-muted-foreground italic">
                        "Сергей сделал сайт быстро и без доработок. Удобно пользоваться!"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Отзыв клиента</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                      <Icon name="Globe" size={60} className="text-primary/40" />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Посмотреть сайт
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4 text-foreground">Контакты</h3>
            <p className="text-muted-foreground text-lg">Готов обсудить ваш проект</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-semibold font-sans mb-6 text-foreground">Свяжитесь со мной</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Телефон</p>
                    <p className="text-muted-foreground">+7 (995) 070-64-97</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">support@suleymanov.su</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ИП</p>
                    <p className="text-muted-foreground">Сулейманов Сергей Родионович</p>
                    <p className="text-sm text-muted-foreground">ИНН: 432800926838</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-foreground">Быстрая связь</h5>
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="Send" size={18} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Форма обратной связи</CardTitle>
                <CardDescription>Опишите ваш проект, и я свяжусь с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold font-sans mb-4">SULEYMANOV</h4>
          <p className="text-muted mb-8">WordPress-разработчик • Создание сайтов под ключ</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <div className="text-center">
              <Icon name="Phone" size={20} className="mx-auto mb-2" />
              <p className="text-sm">+7 (995) 070-64-97</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={20} className="mx-auto mb-2" />
              <p className="text-sm">support@suleymanov.su</p>
            </div>
          </div>
          
          <div className="border-t border-muted/20 pt-8">
            <p className="text-sm text-muted">
              © 2024 SULEYMANOV. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;