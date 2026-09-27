import { GROUP_ORDER, type Member, type MemberGroup } from "./members";

const nameCollator = new Intl.Collator("en", { sensitivity: "base" });

function nameParts(member: Member) {
  // 英文姓名统一使用“名 + 姓”，最后一个词为姓；中英文页面共用此排序。
  const parts = member.name.en.trim().split(/\s+/);
  const surname = parts.pop() ?? "";
  return { surname, givenName: parts.join(" ") };
}

export function compareMembersBySurname(a: Member, b: Member): number {
  const first = nameParts(a);
  const second = nameParts(b);
  return (
    nameCollator.compare(first.surname, second.surname) ||
    nameCollator.compare(first.givenName, second.givenName) ||
    (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  );
}

export function groupMembers(memberList: readonly Member[]) {
  const grouped = new Map<MemberGroup, Member[]>(
    GROUP_ORDER.map((group) => [group, []])
  );

  for (const member of memberList) {
    grouped.get(member.group)!.push(member);
  }

  for (const list of grouped.values()) {
    list.sort(compareMembersBySurname);
  }

  return grouped;
}
