import Link from "next/link";
import { join } from "path";

var pageNationStep = 2;

const Pager = (props) => {
  const { pageTotal, pageNow, categoryName } = props;

  var prevArray = [];
  var nextArray = [];

  var prevCount = pageNow - 1;
  var nextCount = pageTotal - pageNow;

  var prevMax = pageNationStep;
  var nextMax = pageNationStep;

  if (prevCount < prevMax) {
    nextMax = pageNationStep * 2 - prevCount;
  }
  if (nextCount < nextMax) {
    prevMax = pageNationStep * 2 - nextCount;
  }

  if (prevCount <= prevMax) {
    for (let e = 1; e < pageNow; e++) {
      prevArray.push({ url: e, name: e });
    }
  } else {
    if (pageNow - pageNationStep - 1 == 1) {
      prevArray.push({ url: 1, name: 1 });
    } else {
      prevArray.push({ url: 1, name: "<<" });
    }
    for (let e = pageNow - prevMax; e < pageNow; e++) {
      prevArray.push({ url: e, name: e });
    }
  }

  if (nextCount <= nextMax) {
    for (let e = pageNow + 1; e <= pageTotal; e++) {
      nextArray.push({ url: e, name: e });
    }
  } else {
    for (let e = pageNow + 1; e <= pageNow + nextMax; e++) {
      nextArray.push({ url: e, name: e });
    }
    if (pageNow + pageNationStep + 1 == pageTotal) {
      nextArray.push({ url: pageTotal, name: pageTotal });
    } else {
      nextArray.push({ url: pageTotal, name: ">>" });
    }
  }

  return (
    <div className="pager">
      {prevArray.map((e, i) => (
        <span className="pager-item" key={i}>
          <Link href={"?p=" + String(e.url)}>
            <a>{e.name}</a>
          </Link>
        </span>
      ))}

      <span className="pager-item">{pageNow}</span>

      {nextArray.map((e, i) => (
        <span className="pager-item" key={i}>
          <Link href={"?p=" + String(e.url)}>
            <a>{e.name}</a>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Pager;
