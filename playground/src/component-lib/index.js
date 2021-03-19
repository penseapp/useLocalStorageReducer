import { useReducer, useEffect } from "react";
import ExpiredStorage from "expired-storage";
function useLocalStorageReducer(o, e, r, t) {
  void 0 === t && (t = 1800);
  var r = useReducer(e, r, function (r) {
      try {
        var e = new ExpiredStorage().getItem(o),
          t = JSON.stringify(r);
        return e ? JSON.parse(e) : JSON.parse(t);
      } catch (e) {
        return console.error(e), r;
      }
    }),
    a = r[0],
    r = r[1];
  return (
    useEffect(
      function () {
        try {
          var e = new ExpiredStorage();
          !1 !== t && "number" == typeof t
            ? e.setItem(o, JSON.stringify(a), t)
            : window.localStorage.setItem(o, JSON.stringify(a));
        } catch (e) {
          console.error(e);
        }
        localStorage.setItem(o, JSON.stringify(a));
      },
      [t, o, a]
    ),
    [a, r]
  );
}
export { useLocalStorageReducer };
