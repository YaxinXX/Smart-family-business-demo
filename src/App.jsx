import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Store,
  Sparkles,
  Coins,
  ShieldCheck,
  Users,
  Gauge,
  ArrowRight,
  AlertTriangle,
  Gift,
  BarChart3,
  CheckCircle2,
  Clock,
  Wallet,
  FileText,
} from "lucide-react";

const steps = [
  { id: "profile", label: "1. Business Profile", icon: Store },
  { id: "diagnosis", label: "2. AI Hidden Asset Report", icon: Sparkles },
  { id: "token", label: "3. Token Recommendation", icon: Coins },
  { id: "customer", label: "4. Customer Token Page", icon: Users },
  { id: "dashboard", label: "5. Redemption Dashboard", icon: Gauge },
];

const businessData = {
  name: "Harbour Lane Family Café",
  type: "Family-owned neighborhood café",
  location: "Sai Ying Pun, Hong Kong",
  years: 8,
  fundingNeed: "HK$200,000",
  fundingUse: "New espresso machine, light renovation, and redemption buffer",
  monthlyRevenue: "HK$145,000",
  repeatRate: "64%",
  averageTicket: "HK$58",
  reviewScore: "4.6 / 5.0",
  idleCapacity: "Weekdays 3–5 pm",
};

const tokenTerms = [
  ["Token type", "Consumption / membership token"],
  ["Issue size", "800 tokens"],
  ["Price", "HK$250 each"],
  ["Target funding", "HK$200,000"],
  ["Rights", "Coffee credits, dessert discount, tasting events"],
  ["Transfer rule", "Giftable to friends, no speculative secondary market"],
  ["Legal boundary", "No equity, no profit sharing, no voting rights"],
  ["Validity", "12 months with transparent extension rules"],
];


function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, onClick, className = "", variant = "default" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-400";
  const style =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}


function StatCard({ label, value, note }) {
  return (
    <Card className="rounded-2xl shadow-sm border-slate-200">
      <CardContent className="p-4">
        <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
        <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
        {note && <div className="mt-1 text-sm text-slate-500">{note}</div>}
      </CardContent>
    </Card>
  );
}

function Pill({ children }) {
  return <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{children}</span>;
}

function ProgressBar({ value }) {
  return (
    <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6 }}
        className="h-full rounded-full bg-slate-900"
      />
    </div>
  );
}

function ProfilePage({ goNext }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-3 text-white"><Coffee size={28} /></div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Business Profile</h2>
              <p className="text-slate-500">A simple intake page for a small family business owner.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Business name", businessData.name],
              ["Business type", businessData.type],
              ["Location", businessData.location],
              ["Years in operation", `${businessData.years} years`],
              ["Funding need", businessData.fundingNeed],
              ["Use of funds", businessData.fundingUse],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <div className="mt-2 text-sm font-medium text-slate-900">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <FileText className="mt-1 text-slate-600" size={20} />
              <div>
                <div className="font-medium text-slate-900">Uploaded data sources</div>
                <p className="mt-1 text-sm text-slate-600">POS sales records, membership transactions, delivery orders, customer reviews, and simple cost estimates.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>POS data</Pill><Pill>Reviews</Pill><Pill>Membership records</Pill><Pill>Cost structure</Pill>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={goNext} className="mt-6 rounded-2xl px-5 py-5">Run AI diagnosis <ArrowRight className="ml-2" size={18} /></Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm bg-slate-950 text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">What the platform tries to find</h3>
          <p className="mt-3 text-slate-300">Many small family firms have value that traditional finance cannot easily see: loyal customers, future demand, underused space, and local trust.</p>
          <div className="mt-6 space-y-4">
            {[
              ["Community trust", "Stable repeat customers and strong neighborhood reputation."],
              ["Future consumption", "Customers are willing to pre-support future coffee and events."],
              ["Underused capacity", "Afternoon idle hours can be turned into tasting sessions or workshops."],
              ["Family control", "The owners need capital without selling equity or taking expensive debt."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white/8 p-4">
                <div className="font-medium">{title}</div>
                <div className="mt-1 text-sm text-slate-300">{text}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DiagnosisPage({ goNext }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">AI Hidden Asset Report</h2>
        <p className="mt-1 text-slate-500">The AI does not create value from nothing. It organizes evidence that the café already has hidden financing potential.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Monthly revenue" value={businessData.monthlyRevenue} note="Stable over past 12 months" />
        <StatCard label="Repeat customer rate" value={businessData.repeatRate} note="High loyalty signal" />
        <StatCard label="Average ticket" value={businessData.averageTicket} note="Useful for token pricing" />
        <StatCard label="Review score" value={businessData.reviewScore} note="Trust signal" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">AI interpretation</h3>
            <div className="mt-4 space-y-4">
              {[
                ["Loyalty is strong enough for pre-commitment", 82],
                ["Revenue stability supports limited token issuance", 76],
                ["Idle afternoon capacity can absorb new benefits", 68],
                ["Cash-flow buffer still needed", 52],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="font-medium">{value}%</span></div>
                  <ProgressBar value={value} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Recommended financing boundary</h3>
            <div className="mt-4 rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-slate-700" size={22} />
                <div>
                  <div className="font-medium text-slate-900">Suitable for consumption token</div>
                  <p className="mt-1 text-sm text-slate-600">The café has enough repeat demand to pre-sell future consumption rights, but it should avoid investment-return tokens.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 text-amber-700" size={22} />
                <div>
                  <div className="font-medium text-amber-900">Risk warning</div>
                  <p className="mt-1 text-sm text-amber-800">Do not promise profit sharing, token appreciation, or voting rights. Keep it as a membership and usage-right structure.</p>
                </div>
              </div>
            </div>
            <Button onClick={goNext} className="mt-6 rounded-2xl px-5 py-5">Design community token <ArrowRight className="ml-2" size={18} /></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TokenPage({ goNext }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="rounded-2xl shadow-sm bg-slate-950 text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3"><Coins size={28} /></div>
            <div>
              <h2 className="text-2xl font-semibold">Community Café Token</h2>
              <p className="text-slate-300">A transparent consumption-right token for neighborhood supporters.</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-sm text-slate-400">Target funding</div>
            <div className="mt-2 text-5xl font-semibold">HK$200,000</div>
            <p className="mt-3 text-slate-300">HK$150,000 for a new espresso machine, HK$50,000 for renovation and redemption buffer.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/8 p-4"><div className="text-sm text-slate-400">Issue size</div><div className="mt-1 text-2xl font-semibold">800</div></div>
            <div className="rounded-2xl bg-white/8 p-4"><div className="text-sm text-slate-400">Price</div><div className="mt-1 text-2xl font-semibold">HK$250</div></div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900">Recommended terms</h3>
          <div className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
            {tokenTerms.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[0.42fr_0.58fr] gap-4 p-4 text-sm">
                <div className="font-medium text-slate-500">{label}</div>
                <div className="text-slate-900">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 text-slate-700" size={22} />
              <div>
                <div className="font-medium text-slate-900">Why this is different from a normal prepaid card</div>
                <p className="mt-1 text-sm text-slate-600">The platform sets an issuance cap, discloses use of funds, records each right, allows controlled gifting, and monitors future redemption obligations.</p>
              </div>
            </div>
          </div>
          <Button onClick={goNext} className="mt-6 rounded-2xl px-5 py-5">Generate customer page <ArrowRight className="ml-2" size={18} /></Button>
        </CardContent>
      </Card>
    </div>
  );
}

function CustomerPage({ goNext }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <div className="rounded-3xl bg-slate-100 p-8 text-center">
            <Coffee className="mx-auto text-slate-800" size={56} />
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Support Harbour Lane Family Café</h2>
            <p className="mt-3 text-slate-600">Help us upgrade our coffee machine and refresh the shop while receiving future café benefits.</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border p-4 text-center"><Wallet className="mx-auto" size={22} /><div className="mt-2 text-sm font-medium">HK$250</div><div className="text-xs text-slate-500">per token</div></div>
            <div className="rounded-2xl border p-4 text-center"><Gift className="mx-auto" size={22} /><div className="mt-2 text-sm font-medium">Giftable</div><div className="text-xs text-slate-500">to friends</div></div>
            <div className="rounded-2xl border p-4 text-center"><Clock className="mx-auto" size={22} /><div className="mt-2 text-sm font-medium">12 months</div><div className="text-xs text-slate-500">validity</div></div>
          </div>

          <Button className="mt-6 w-full rounded-2xl py-6 text-base">Buy Community Café Token</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900">Customer-facing disclosure</h3>
          <div className="mt-5 space-y-4">
            {[
              ["Purpose of funding", "HK$150,000 will be used for a new espresso machine. HK$50,000 will support renovation and redemption buffer."],
              ["What customers receive", "Coffee credits, dessert discounts, new product tasting, and priority access to small community events."],
              ["What customers do not receive", "No equity, no profit sharing, no voting rights, and no guaranteed resale value."],
              ["Redemption and protection", "All redemptions are recorded. If the café faces temporary disruption, extension or refund rules are shown before purchase."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-4">
                <div className="font-medium text-slate-900">{title}</div>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <Button onClick={goNext} variant="outline" className="mt-6 rounded-2xl px-5 py-5">Open owner dashboard <ArrowRight className="ml-2" size={18} /></Button>
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardPage() {
  const sold = 612;
  const total = 800;
  const redeemed = 218;
  const soldPct = Math.round((sold / total) * 100);
  const redemptionPct = Math.round((redeemed / sold) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Redemption Dashboard</h2>
          <p className="mt-1 text-slate-500">The owner sees funding progress, future obligations, and AI risk reminders.</p>
        </div>
        <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">Risk level: Moderate and manageable</div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Tokens sold" value={`${sold} / ${total}`} note={`${soldPct}% of target`} />
        <StatCard label="Funds raised" value="HK$153,000" note="Before platform fees" />
        <StatCard label="Rights redeemed" value={`${redeemed}`} note={`${redemptionPct}% of sold tokens`} />
        <StatCard label="Outstanding obligation" value="HK$98,500" note="AI-monitored exposure" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Progress and obligations</h3>
            <div className="mt-5 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>Funding progress</span><span>{soldPct}%</span></div>
                <ProgressBar value={soldPct} />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>Redemption pressure</span><span>36%</span></div>
                <ProgressBar value={36} />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>Cash buffer adequacy</span><span>71%</span></div>
                <ProgressBar value={71} />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <BarChart3 className="mt-1 text-slate-700" size={22} />
                <div>
                  <div className="font-medium text-slate-900">AI recommendation</div>
                  <p className="mt-1 text-sm text-slate-600">Keep selling until 720 tokens, then pause and reassess redemption pressure before issuing the final batch.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Safeguards</h3>
            <div className="mt-4 space-y-3">
              {[
                "No profit promise or investment return language.",
                "No speculative secondary market trading.",
                "Token rights and expiry shown before purchase.",
                "Refund and extension rules displayed clearly.",
                "AI warning if outstanding obligations exceed safe threshold.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 text-slate-700" size={18} />
                  <div className="text-sm text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function SmartFamilyBusinessPrototype() {
  const [active, setActive] = useState("profile");
  const activeIndex = steps.findIndex((s) => s.id === active);
  const next = () => setActive(steps[Math.min(activeIndex + 1, steps.length - 1)].id);

  const content = useMemo(() => {
    if (active === "profile") return <ProfilePage goNext={next} />;
    if (active === "diagnosis") return <DiagnosisPage goNext={next} />;
    if (active === "token") return <TokenPage goNext={next} />;
    if (active === "customer") return <CustomerPage goNext={next} />;
    return <DashboardPage />;
  }, [active]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <div className="mb-2 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Smart Family Business Platform · Interactive Demo
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Community Capital for Smart Family Businesses</h1>
                <p className="mt-3 max-w-3xl text-slate-600">AI makes hidden value visible. Tokenization makes community support executable.</p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 text-white lg:w-72">
                <div className="text-sm text-slate-300">Core thesis</div>
                <p className="mt-2 text-sm leading-6">Small family firms may not need a full family office, but they need lighter tools to identify hidden assets, structure community financing, and manage future obligations.</p>
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-2 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = active === step.id;
              const isDone = index < activeIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActive(step.id)}
                  className={`rounded-2xl border p-3 text-left transition ${isActive ? "border-slate-900 bg-white shadow-sm" : isDone ? "border-slate-200 bg-white" : "border-slate-200 bg-slate-100"}`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={18} className={isActive ? "text-slate-900" : "text-slate-500"} />
                    <span className={`text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-500"}`}>{step.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            {content}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
